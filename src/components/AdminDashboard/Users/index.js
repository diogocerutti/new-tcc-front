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
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateModal from "./components/updateModal";
import { useState } from "react";

export default function Users() {
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpenUpdate = () => setOpenUpdate(true);

  const handleCloseUpdate = () => setOpenUpdate(false);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={10}>
          <Grid item>
            <Typography variant="h5">Usuários</Typography>
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
                  Telefone
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
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  1
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Edson Silva
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)977864301
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  ed@g.com
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
                      alert("Usuário Excluído.");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  2
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Carlos Pereira
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)977864351
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  car@c.com
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
                      alert("Usuário Excluído.");
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: 17 }}>
                  3
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  Diogo Costa
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  (49)911111111
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 17 }}>
                  diogo@d.com
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
                      alert("Usuário Excluído.");
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
