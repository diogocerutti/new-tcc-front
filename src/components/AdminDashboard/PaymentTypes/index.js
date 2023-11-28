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
import {
  getAllPaymentTypes,
  deletePaymentType,
} from "../../../api/payment_type";
import { useNavigate } from "react-router-dom";

export default function PaymentTypes() {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState();
  const [modalType, setModalType] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGetTypes = useCallback(async () => {
    const response = await getAllPaymentTypes();
    setTypes(response);
  }, []);

  useEffect(() => {
    handleGetTypes();
  }, [handleGetTypes]);

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
            <Typography variant="h5">Tipos de pagamento</Typography>
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
                  Tipo
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
              {types.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" sx={{ fontSize: 17 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.type}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal();
                        setCurrentType(row);
                        setModalType("put");
                      }}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        await deletePaymentType(row.id).then((res) => {
                          if (res.name === "AxiosError") {
                            alert(res.response.data.msg); // mensagem de erro do BACK
                          } else {
                            alert("Tipo de pagamento removido com sucesso!");
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
        rowType={currentType}
        modalType={modalType}
      />
    </>
  );
}
