import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createOrder } from "../../api/order/index.js";
import Cookies from "js-cookie";

export function Product() {
  const id_user = Cookies.get("user_id");
  let state = useLocation();

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = [{ id_product: state.state.id, quantity: quantity }];

    await createOrder(id_user, data);
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
