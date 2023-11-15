import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppContext } from "../../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cart() {
  let navigate = useNavigate();
  const { cart, setCart } = useAppContext();
  const [total, setTotal] = useState();

  function priceFormat(price) {
    if (price.includes(".")) {
      return price.replace(".", ",") + "0";
    } else {
      return price + ",00";
    }
  }

  function subtotalFormat(price, quantity) {
    let subtotal = price * quantity;
    if (subtotal.toString().includes(".")) {
      return subtotal.toString().replace(".", ",") + "0";
    } else {
      return subtotal.toString() + ",00";
    }
  }

  const handleRemoveProduct = (row) => {
    alert("Produto removido.");
    cart.splice(cart.indexOf(row), 1);
    setCart([...cart]);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, obj) => acc + obj.quantity * obj.price, 0));
  }, [cart, total]);

  return (
    <Grid container>
      {cart.length !== 0 ? (
        <>
          <TableContainer
            sx={{
              justifyContent: "center",
              display: "flex",
              marginTop: 5,
            }}
          >
            <Table sx={{ backgroundColor: "#FFF", width: 1300 }}>
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
                    Preço
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
                  <TableRow
                    key={row.id_product}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" width="30%">
                      <Grid item display="flex" alignItems="center">
                        <IconButton
                          color="error"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveProduct(row);
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                        <Typography color="#71bcf4" fontSize={17}>
                          {row.name}
                        </Typography>
                        <img
                          alt="imagem"
                          src={require(`C:/Users/diogo/Desktop/Produtos/${row.image}`)}
                          style={{ height: "3vw", width: "3vw" }}
                        />
                      </Grid>
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 17 }}>
                      R$ {priceFormat(row.price)}
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
                  <TableCell
                    align="left"
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Total
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    R$ {total}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid
            item
            justifyContent="space-evenly"
            display="flex"
            width="100%"
            mt={3}
          >
            <Button
              sx={{ border: "solid", backgroundColor: "#FFF", color: "#000" }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Continuar comprando
            </Button>
            <Button
              sx={{
                border: "solid",
                backgroundColor: "#8AD072",
                color: "#000",
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/checkout", { state: { total: total } });
              }}
            >
              Continuar para pagamento
            </Button>
          </Grid>
        </>
      ) : (
        <Typography>Carrinho vazio!</Typography>
      )}
    </Grid>
  );
}
