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
import ModalForm from "./components/ModalForm/index.js";
import { useState, useCallback, useEffect } from "react";
import {
  getAllOrderStatus,
  deleteOrderStatus,
} from "../../../api/order_status/index.js";
import { useNavigate } from "react-router-dom";

export default function OrderStatus() {
  const navigate = useNavigate();
  const [status, setStatus] = useState([]);
  const [currentStatus, setCurrentStatus] = useState();
  const [modalType, setModalType] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGetStatus = useCallback(async () => {
    const response = await getAllOrderStatus();
    setStatus(response);
  }, []);

  useEffect(() => {
    handleGetStatus();
  }, [handleGetStatus]);

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
            <Typography variant="h5">Status de pedido</Typography>
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
                  Status
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
              {status.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" sx={{ fontSize: 17 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal();
                        setCurrentStatus(row);
                        setModalType("put");
                      }}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        await deleteOrderStatus(row.id).then((res) => {
                          if (res.name === "AxiosError") {
                            alert(res.response.data.msg); // mensagem de erro do BACK
                          } else {
                            alert("Status de pedido removido com sucesso!");
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
        rowStatus={currentStatus}
        modalType={modalType}
      />
    </>
  );
}
