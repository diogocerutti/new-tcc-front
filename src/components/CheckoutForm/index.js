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
import { useLocation, useNavigate } from "react-router-dom";
import { getUserAddress } from "../../api/user_address";
import { createOrder } from "../../api/order";
import Cookies from "js-cookie";

export function CheckoutForm() {
  const id_user = Cookies.get("user_id");
  const { cart, setCart } = useAppContext();
  const navigate = useNavigate();
  let state = useLocation();
  let data;

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

  function subtotalFormat(price, quantity) {
    let subtotal = price * quantity;
    if (subtotal.toString().includes(".")) {
      return subtotal.toString().replace(".", ",") + "0";
    } else {
      return subtotal.toString() + ",00";
    }
  }

  function dateFormat(date) {
    let newDate;
    newDate =
      date.substring(8, 10) +
      "/" +
      date.substring(5, 7) +
      "/" +
      date.substring(0, 4);
    return newDate;
  }

  const handleGetUserAddress = useCallback(async () => {
    const response = await getUserAddress(id_user);
    setUser_address(response);
  }, [id_user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const products = cart.map(function (i) {
      return {
        id_product: i.id_product,
        quantity: i.quantity,
      };
    });

    data = {
      products: products,
      id_payment_type: Number(id_payment_type),
      date: dateFormat(date),
      hour: hour,
    };

    if (data.hour.length === 0 || data.date === "//") {
      return alert("Data e Hora são obrigatórios!");
    } else
      return await createOrder(id_user, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          setCart([]);
          alert("Pedido enviado!");
          return navigate("/user/orders");
        }
      });
  };

  useEffect(() => {
    handleGetUserAddress();
  }, [handleGetUserAddress]);

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Grid item alignSelf={"center"} width={"60%"}>
        <Typography fontSize={40}>Finalizar Pedido</Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 5, padding: 1, backgroundColor: "#FFF" }}
          onSubmit={handleSubmit}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Produto
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Quantidade
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Subtotal
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow key={row.id_product}>
                  <TableCell
                    align="left"
                    sx={{ color: "#2EA2CC", fontSize: 17 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.quantity}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    R$ {subtotalFormat(row.price, row.quantity)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  {cart.length !== 0 ? "R$ " + state.state.total : ""}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid item display={"flex"} justifyContent={"space-between"} mt={3}>
            <Grid item>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                Data
              </Typography>
              <Grid item justifyContent={"space-between"} display={"flex"}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  margin="normal"
                  required
                  id="date"
                  name="date"
                  label="Para quando?"
                  onChange={handleChangeDate}
                />
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type="time"
                  margin="normal"
                  required
                  id="time"
                  name="time"
                  label="Horário"
                  onChange={handleChangeHour}
                />
              </Grid>
            </Grid>
            <FormControl>
              <FormLabel
                id="payment_types"
                sx={{ fontSize: 20, fontWeight: "bold" }}
              >
                Tipo de Pagamento
              </FormLabel>
              <RadioGroup
                defaultValue="2"
                name="payment_types"
                value={id_payment_type}
                onChange={handleChangePaymentId}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Crédito"
                />
                <FormControlLabel value="2" control={<Radio />} label="Pix" />
              </RadioGroup>
            </FormControl>
            <Grid item>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                Endereço
              </Typography>
              <Typography>Rua: {user_address.address}</Typography>
              <Typography>Cidade: {user_address.city}</Typography>
              <Typography>CEP: {user_address.postal_code}</Typography>
            </Grid>
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              id="cadastrar"
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Finalizar Pedido
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
