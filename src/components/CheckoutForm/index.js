import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useAppContext } from "../../hooks";
import { useEffect, useState } from "react";

export function CheckoutForm() {
  const { cart, setCart } = useAppContext();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography component="h1" variant="h5" color="black">
        Finalizar Pedido
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, border: "solid", padding: 1 }}
      >
        <Grid item border={"solid"} sx={{ borderWidth: 1 }}>
          <Typography variant="h6">Endereço</Typography>
          <Typography>Rua</Typography>
          <Typography>Cidade</Typography>
          <Typography>CEP</Typography>
        </Grid>
        <TextField
          type="date"
          margin="normal"
          required
          fullWidth
          id="date"
          name="date"
          label="Para quando?"
        />
        <TextField
          type="time"
          margin="normal"
          required
          fullWidth
          id="time"
          name="time"
          label="Horário"
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Produto</TableCell>
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
                <TableCell align="left">
                  <Typography variant="body1" color="#2EA2CC">
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price * row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          type="submit"
          fullWidth
          id="cadastrar"
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          Cadastrar
        </Button>
      </Box>
    </Grid>
  );
}
