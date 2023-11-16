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
import UpdateModal from "./components/updateModal";
import { useState } from "react";

export default function Categories() {
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
            <Typography variant="h5">Categorias de Produtos</Typography>
            <IconButton>
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
                  Categoria
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
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  1
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Tortas
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenUpdate();
                    }}
                  />
                  <DeleteIcon
                    color="error"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Categoria de produto excluída.");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  2
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Salgados
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Editar!");
                    }}
                  />
                  <DeleteIcon
                    color="error"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Categoria de produto excluída.");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  4
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Bebidas
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Editar!");
                    }}
                  />
                  <DeleteIcon
                    color="error"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Categoria de produto excluída.");
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
