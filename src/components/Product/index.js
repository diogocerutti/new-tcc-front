import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createOrder } from "../../api/order/index.js";
import Cookies from "js-cookie";
import { useAppContext } from "../../hooks/index.js";

export function Product() {
  const id_user = Cookies.get("user_id");
  let state = useLocation();
  /* let cart = []; */
  const { cart, setCart } = useAppContext();

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cart.includes({ id_product: state.state.id, quantity: quantity })) {
      const newList = cart.concat([
        { id_product: state.state.id, quantity: quantity },
      ]);
      setCart(newList);
    }

    console.log(cart);

    /* cart.push({ id_product: state.state.id, quantity: quantity });

    console.log(cart); */

    /* const data = [{ id_product: state.state.id, quantity: quantity }]; */

    /* await createOrder(id_user, data); */
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
