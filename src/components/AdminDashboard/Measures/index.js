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
  getAllMeasures,
  deleteMeasure,
} from "../../../api/measure_type/index.js";
import { useNavigate } from "react-router-dom";

export default function Measures() {
  const navigate = useNavigate();
  const [measures, setMeasures] = useState([]);
  const [currentMeasure, setCurrentMeasure] = useState();
  const [modalType, setModalType] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGetMeasures = useCallback(async () => {
    const response = await getAllMeasures();
    setMeasures(response);
  }, []);

  useEffect(() => {
    handleGetMeasures();
  }, [handleGetMeasures]);

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
            <Typography variant="h5">Unidades de Medida</Typography>
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
                  Medida
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
              {measures.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" sx={{ fontSize: 17 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.measure}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal();
                        setCurrentMeasure(row);
                        setModalType("put");
                      }}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        await deleteMeasure(row.id).then((res) => {
                          if (res.name === "AxiosError") {
                            alert(res.response.data.msg); // mensagem de erro do BACK
                          } else {
                            alert("Unidade de medida removida com sucesso!");
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
        rowMeasure={currentMeasure}
        modalType={modalType}
      />
    </>
  );
}
