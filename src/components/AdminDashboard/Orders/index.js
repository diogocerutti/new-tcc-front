import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import cancelled from "../../../images/cancelado.png";
import finished from "../../../images/finalizado.png";
import moviment from "../../../images/movimento.png";
import prepare from "../../../images/preparacao.png";
import UpdateModal from "./components/updateModal";
import { useState } from "react";

export default function Orders() {
  const orderImg = [
    { title: "Cancelado", image: cancelled },
    { title: "Finalizado", image: finished },
    { title: "Em movimento", image: moviment },
    { title: "Em preparação", image: prepare },
  ];

  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpenUpdate = () => setOpenUpdate(true);

  const handleCloseUpdate = () => setOpenUpdate(false);

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
            <Typography variant="h5">Pedidos</Typography>
            <Grid
              item
              display={"flex"}
              justifyContent={"space-between"}
              lg={9}
              md={9}
              xs={9}
            >
              <Typography>Legenda: </Typography>
              {orderImg.map((row) => (
                <Grid item display={"flex"} key={row.title}>
                  <img src={row.image} alt={row.title} width={25} />
                  <Typography> {row.title}</Typography>
                </Grid>
              ))}
            </Grid>
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
                  Cliente
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Endereço
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Telefone
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Data Previsão
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Hora
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
              <TableRow sx={{ backgroundColor: "#F9D34F" }}>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  8
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Amanda Souza
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Rua Borges de Medeiros, 320-D
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)988774501
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  19/12/2023
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  15:00
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Editar!");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#EF6363" }}>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  9
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Pedro Araújo
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Rua Cascavel, 70-D
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)984392211
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  10/12/2023
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  19:00
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Editar!");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#70E3FC" }}>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  10
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Cleber Pereira
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Rua Assis Brasil, 400-D
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)988905533
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  07/12/2023
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  10:00
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Editar!");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#8AD072" }}>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  11
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Cinthia Cruz
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Rua Madeireira, 400-D
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)977512345
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  09/12/2023
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  10:00
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenUpdate();
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <UpdateModal openUpdate={openUpdate} onCloseUpdate={handleCloseUpdate} />
    </>
  );
}
