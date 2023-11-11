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
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppContext } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getUserAddress } from "../../api/user_address";
import Cookies from "js-cookie";

export function CheckoutForm() {
  const id_user = Cookies.get("user_id");
  let state = useLocation();
  const { cart } = useAppContext();

  const [user_address, setUser_address] = useState({});
  const [id_payment_type, setId_payment_type] = useState("2");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeHour = (event) => {
    setHour(event.target.value);
  };

  const handleChangePaymentId = (event) => {
    setId_payment_type(event.target.value);
  };

  const handleGetUserAddress = useCallback(async () => {
    const response = await getUserAddress(id_user);
    setUser_address(response);
  }, [id_user]);

  useEffect(() => {
    handleGetUserAddress();
  }, [handleGetUserAddress]);

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
          <Typography>Rua: {user_address.address}</Typography>
          <Typography>Cidade: {user_address.city}</Typography>
          <Typography>CEP: {user_address.postal_code}</Typography>
        </Grid>
        <TextField
          type="date"
          margin="normal"
          required
          fullWidth
          id="date"
          name="date"
          label="Para quando?"
          onChange={handleChangeDate}
        />
        <TextField
          type="time"
          margin="normal"
          required
          fullWidth
          id="time"
          name="time"
          label="Horário"
          onChange={handleChangeHour}
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
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                {cart.length !== 0 ? state.state.total : ""}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <FormControl>
          <FormLabel id="payment_types">Tipo de Pagamento</FormLabel>
          <RadioGroup
            defaultValue="2"
            name="payment_types"
            value={id_payment_type}
            onChange={handleChangePaymentId}
          >
            <FormControlLabel value="1" control={<Radio />} label="Crédito" />
            <FormControlLabel value="2" control={<Radio />} label="Pix" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          id="cadastrar"
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => {
            e.preventDefault();
            alert("Pedido Enviado!");
          }}
        >
          Finalizar Pedido
        </Button>
      </Box>
    </Grid>
  );
}
