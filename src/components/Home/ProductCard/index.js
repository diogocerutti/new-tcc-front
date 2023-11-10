import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
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

  return (
    <Grid container columnGap={3} justifyContent="center">
      {products.map(
        (p) =>
          p.status === "true" && (
            <Card key={p.id} sx={{ width: 345 }}>
              <CardHeader title={p.name} subheader={p.category} />
              <CardMedia
                component="img"
                height="194"
                src={require(`C:/Users/diogo/Desktop/Produtos/${p.image}`)}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2">
                  R${p.price} {p.measure}
                </Typography>
                <Typography variant="caption">{p.description}</Typography>
                <Typography>
                  <Link to={`/product/${p.id}`} state={p}>
                    Comprar
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          )
      )}
    </Grid>
  );
}
