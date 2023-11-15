import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../hooks/index.js";

export function Product() {
  let state = useLocation();
  const { cart, setCart } = useAppContext();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("CART:", cart);
  }, [cart]);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  function priceFormat(price) {
    if (price.includes(".")) {
      return price.replace(".", ",") + "0";
    } else {
      return price + ",00";
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !cart.includes({
        id_product: state.state.id,
        name: state.state.name,
        price: state.state.price,
        image: state.state.image,
        quantity: Number(quantity),
      })
    ) {
      const newList = cart.concat([
        {
          id_product: state.state.id,
          name: state.state.name,
          price: state.state.price,
          image: state.state.image,
          quantity: Number(quantity),
        },
      ]);
      const summed = newList.reduce((acc, cur) => {
        const item =
          acc.length > 0 &&
          acc.find(({ id_product }) => id_product === cur.id_product);
        if (item) {
          item.quantity += cur.quantity;
        } else
          acc.push({
            id_product: cur.id_product,
            name: cur.name,
            price: cur.price,
            image: cur.image,
            quantity: cur.quantity,
          });
        return acc;
      }, []);
      await setCart(summed);
      alert("Produto adicionado ao carrinho!");
    }
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        justifyContent={"space-evenly"}
        lg={5}
        md={9}
        xs={11}
        display={"flex"}
        mt={5}
        sx={{ backgroundColor: "#FFF" }}
      >
        <Grid item width={370} height={280}>
          <img
            alt="product"
            src={require(`C:/Users/diogo/Desktop/Produtos/${state.state.image}`)}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Typography variant="h3" fontFamily="revert">
            {state.state.name}
          </Typography>
          <Typography variant="h5">
            R$ {priceFormat(state.state.price)} {state.state.measure}
          </Typography>
          <Typography>{state.state.description}</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            justifyContent={"space-between"}
            display={"flex"}
          >
            <TextField
              type="number"
              required
              id="quantity"
              name="quantity"
              label="Quantidade"
              sx={{ width: "30%" }}
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
