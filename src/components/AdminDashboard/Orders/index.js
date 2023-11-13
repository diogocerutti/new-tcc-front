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

export default function Orders() {
  return (
    <>
      <Typography variant="h5">Pedidos</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Cliente</TableCell>
              <TableCell align="right">Endereço</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Data Previsão</TableCell>
              <TableCell align="right">Hora</TableCell>
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
              <TableCell align="right">{/* {row.name} */}Cliente</TableCell>
              <TableCell align="right">{/* {row.price} */}Endereço</TableCell>
              <TableCell align="right">{/* {row.measure} */}Telefone</TableCell>
              <TableCell align="right">Data previsão</TableCell>
              <TableCell align="right">{/* {row.category} */}Hora</TableCell>

              <TableCell align="right">
                <EditIcon
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Editar!");
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
