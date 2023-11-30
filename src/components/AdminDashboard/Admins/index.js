import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModalForm from "./components/ModalForm";
import { useState, useCallback, useEffect } from "react";
import { getAllAdmins, deleteAdmin } from "../../../api/admin/index.js";
import { useNavigate } from "react-router-dom";

export default function Admins() {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState();
  const [modalType, setModalType] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGetAdmins = useCallback(async () => {
    const response = await getAllAdmins();
    setAdmins(response);
  }, []);

  useEffect(() => {
    handleGetAdmins();
  }, [handleGetAdmins]);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={10}>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Usuários Administradores</Typography>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal();
                setModalType("post");
              }}
            >
              <AddCircleIcon color="success" sx={{ fontSize: "3vw" }} />
            </IconButton>
          </Grid>
          <Table sx={{ mt: 6 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  ID
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Usuário
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  E-mail
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Opções
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">
                    <Grid
                      item
                      sx={{ display: "flex" }}
                      justifyContent={"space-between"}
                    >
                      <Typography fontSize={17}>{row.id}</Typography>
                      {row.status === true ? (
                        <img
                          alt="status"
                          src={require("../../../images/true.png")}
                          style={{ height: "1.1vw", width: "1.1vw" }}
                        />
                      ) : (
                        <img
                          alt="status"
                          src={require("../../../images/false.png")}
                          style={{ height: "1.1vw", width: "1.1vw" }}
                        />
                      )}
                    </Grid>
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.username}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.email}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal();
                        setCurrentAdmin(row);
                        setModalType("put");
                      }}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        await deleteAdmin(row.id).then((res) => {
                          if (res.name === "AxiosError") {
                            alert(res.response.data.msg); // mensagem de erro do BACK
                          } else {
                            alert(
                              "Usuário Administrador removido com sucesso!"
                            );
                            return navigate(0);
                          }
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <ModalForm
        openModal={openModal}
        onCloseModal={handleCloseModal}
        rowAdmin={currentAdmin}
        modalType={modalType}
      />
    </>
  );
}
