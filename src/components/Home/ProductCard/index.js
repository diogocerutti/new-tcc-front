import { Typography, Grid } from "@mui/material";
import { getAllProducts } from "../../../api/product";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  const handleGetProducts = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  function priceFormat(price) {
    if (price.includes(".")) {
      return price.replace(".", ",") + "0";
    } else {
      return price + ",00";
    }
  }

  return (
    <Grid container columnGap={3} rowGap={12} justifyContent="center">
      {products.map(
        (p) =>
          p.status === true && (
            <Link
              to={`/product/${p.id}`}
              state={p}
              style={{ textDecoration: "none", color: "#000" }}
              key={p.id}
            >
              <Grid
                item
                width={370}
                height={280}
                mt={5}
                sx={{ backgroundColor: "#FFF", boxShadow: 10 }}
              >
                <img
                  alt="product"
                  src={require(`C:/Users/diogo/Desktop/Produtos/${p.image}`)}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
                <Grid item>
                  <Typography variant="h4" fontFamily="revert">
                    {p.name}
                  </Typography>
                  <Typography variant="h6">{p.category}</Typography>
                  <Typography variant="h6">
                    R$ {priceFormat(p.price)} {p.measure}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          )
      )}
    </Grid>
  );
}
