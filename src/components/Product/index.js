import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState, useEffect /* useCallback  */ } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../hooks/index.js";
/* import { createOrder, updateOrder } from "../../api/order/index.js"; */
/* import Cookies from "js-cookie"; */

export function Product() {
  let state = useLocation();
  const { cart, setCart } = useAppContext();
  /* const id_user = Cookies.get("user_id"); */
  /* const items = useCallback([], []); */

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("CART:", cart);
  }, [cart]);

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

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
      setCart(summed);
      alert("Produto adicionado ao carrinho!");
    }

    /* items.push({ id_product: state.state.id, quantity: Number(quantity) });
    console.log("ITEMS ANTES:", items); */

    /* const newList = cart.concat(summed);

    const summedCart = newList.reduce((acc, cur) => {
      const item =
        acc.length > 0 &&
        acc.find(({ id_product }) => id_product === cur.id_product);
      if (item) {
        item.quantity += cur.quantity;
      } else acc.push({ id_product: cur.id_product, quantity: cur.quantity });
      return acc;
    }, []);

    setCart(summedCart);
 */
    /* if (!currentOrder) {
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
    } */
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
