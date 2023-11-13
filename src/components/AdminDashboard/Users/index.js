import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Users() {
  return (
    <>
      <Typography variant="h5">Usuários</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.map((row) => ( */}
            <TableRow
              /* key={row.id} */
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ID
                {/* {row.id}{" "}
                    {row.status === "true" ? (
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
                    )} */}
              </TableCell>
              <TableCell align="right">{/* {row.name} */}Nome</TableCell>
              <TableCell align="right">{/* {row.price} */}Telefone</TableCell>
              <TableCell align="right">{/* {row.measure} */}E-mail</TableCell>
              <TableCell align="right">
                <EditIcon
                  onClick={async (e) => {
                    e.preventDefault();
                    alert("Editar!");
                  }}
                />
                <DeleteIcon
                  color="error"
                  onClick={async (e) => {
                    e.preventDefault();
                    alert("Excluir!");
                  }}
                />
              </TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
