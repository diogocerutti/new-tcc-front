import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllProducts } from "../../api/product";
import { useState, useCallback, useEffect } from "react";

export default function AdminTable() {
  const [products, setProducts] = useState([]);

  const handleGetProducts = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Unidade Medida</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Imagem</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.measure}</TableCell>
              <TableCell align="right">...</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                <img
                  alt="imagem"
                  src={require(`C:/Users/diogo/Desktop/Produtos/${row.image}`)}
                  style={{ height: "1.6vw", width: "1.6vw" }}
                />
              </TableCell>
              <TableCell align="right">Opções</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
