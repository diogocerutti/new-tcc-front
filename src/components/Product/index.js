import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createOrder, updateOrder } from "../../api/order/index.js";
import Cookies from "js-cookie";
import { useAppContext } from "../../hooks/index.js";
import { useNavigate } from "react-router-dom";

export function Product() {
  let navigate = useNavigate();
  const id_user = Cookies.get("user_id");
  let state = useLocation();
  const cart = useCallback([], []);
  const cartUpdate = useCallback([], []);
  const { currentOrder, setCurrentOrder } = useAppContext();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("USE EFFECT:", currentOrder);
  }, [currentOrder]);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentOrder) {
      cart.push({ id_product: state.state.id, quantity: Number(quantity) });
      await createOrder(id_user, cart).then((res) => setCurrentOrder(res.id));
    } else {
      cartUpdate.push({
        id_product: state.state.id,
        quantity: Number(quantity),
      });
      await updateOrder(currentOrder, cartUpdate).then((res) =>
        console.log(res)
      );
    }
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item justifyContent={"space-between"} display={"flex"}>
        <Grid item>
          <img
            alt="oi"
            src={require(`C:/Users/diogo/Desktop/Produtos/${state.state.image}`)}
            height="194"
          />
        </Grid>
        <Grid item>
          <Typography variant="h3">{state.state.name}</Typography>
          <Typography variant="h5">{state.state.price}</Typography>
          <Typography>{state.state.description}</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              type="number"
              sx={{ width: "30%" }}
              required
              id="quantity"
              name="quantity"
              label="Quantidade"
              value={quantity}
              onChange={handleChangeQuantity}
            ></TextField>
            <Button
              type="submit"
              id="enviar"
              variant="contained"
              color="primary"
            >
              Comprar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
