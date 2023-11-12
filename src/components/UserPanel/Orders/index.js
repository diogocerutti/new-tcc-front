import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export function Orders() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Número</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left" width="30%">
              Número
            </TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
