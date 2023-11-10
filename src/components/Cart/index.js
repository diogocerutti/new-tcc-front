import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppContext } from "../../hooks";
import { useEffect, useState } from "react";

export function Cart() {
  const { cart } = useAppContext();
  const [total, setTotal] = useState();

  const handleRemoveProduct = (row) => {
    alert("Produto removido.");
    console.log(cart.splice(row, 1));
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, obj) => acc + obj.quantity * obj.price, 0));
    console.log(cart);
  }, [cart, total]);

  return (
    <Grid container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.id_product}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" width="30%">
                  <Grid item display="flex" alignItems="center">
                    <IconButton
                      color="error"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveProduct(row);
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                    <Typography variant="body1" color="#2EA2CC">
                      {row.name}
                    </Typography>
                    <img
                      alt="imagem"
                      src={require(`C:/Users/diogo/Desktop/Produtos/${row.image}`)}
                      style={{ height: "5vw", width: "5vw" }}
                    />
                  </Grid>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price * row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid item display="flex" justifyContent="space-evenly" width="100%">
        <Button sx={{ border: "solid" }}>Continuar comprando</Button>
        <Grid item>
          <Typography>Total: {total}</Typography>
          <Button sx={{ border: "solid" }}>Continuar para pagamento</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
