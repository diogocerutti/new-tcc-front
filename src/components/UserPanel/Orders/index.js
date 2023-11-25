import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Grid,
  IconButton,
  Button,
  Modal,
  Rating,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState, useCallback, useEffect } from "react";
import { getUserOrders } from "../../../api/order";
import Cookies from "js-cookie";

export function Orders() {
  const id_user = Cookies.get("user_id");
  const [userOrders, setUserOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState();
  const [openDetails, setOpenDetails] = useState(false);
  const [openRate, setOpenRate] = useState(false);
  const [rating, setRating] = useState(2);

  const statusColor = (status) => {
    switch (status) {
      case "Aguardando pagamento":
        return "gray";
      case "Em preparação":
        return "#ffa500";
      case "Em movimento":
        return "#00d2ff";
      case "Finalizado":
        return "#008000";
      case "Cancelado":
        return "#ff0000";
      default:
        return "black";
    }
  };

  const handleOpenDetails = (order_details) => {
    setOpenDetails(true);
    setCurrentOrder(order_details);
  };

  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenRate = () => setOpenRate(true);
  const handleCloseRate = () => setOpenRate(false);

  function dateFormat(date) {
    if (date.includes("-")) {
      return date.replaceAll("-", "/");
    } else {
      return date;
    }
  }

  function totalFormat(total) {
    if (total.toString().includes(".")) {
      return total.toString().replaceAll(".", ",") + "0";
    } else {
      return total.toString() + ",00";
    }
  }

  const handleGetUserOrders = useCallback(async () => {
    const response = await getUserOrders(id_user);
    setUserOrders(response);
  }, [id_user]);

  useEffect(() => {
    handleGetUserOrders();
  }, [handleGetUserOrders]);

  return (
    <Grid container justifyContent={"center"}>
      {userOrders.length !== 0 ? (
        <>
          <Grid
            item
            lg={11}
            md={11}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Typography fontSize={40}>Pedidos</Typography>
          </Grid>
          <Grid
            item
            mt={5}
            md={11}
            lg={11}
            sx={{ backgroundColor: "#FFF", border: 1 }}
          >
            <Modal
              open={openDetails}
              onClose={handleCloseDetails}
              slotProps={{
                backdrop: { style: { backgroundColor: "transparent" } },
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: 1,
              }}
            >
              <Grid
                item
                lg={4}
                md={8}
                xs={12}
                sx={{ backgroundColor: "#FFF", border: 2 }}
              >
                <Typography fontSize={20} fontWeight={"bold"} mt={2} ml={2}>
                  Detalhes do Pedido
                </Typography>
                <Table sx={{ width: "100%" }}>
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
                        Preço
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentOrder !== undefined && (
                      <>
                        {currentOrder.order_items_relation.map((row) => (
                          <TableRow
                            key={row.product_relation.name}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell align="left" sx={{ fontSize: 17 }}>
                              {row.product_relation.name}
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 17 }}>
                              {row.quantity}
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: 17 }}>
                              R$ {totalFormat(row.product_relation.price)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    )}
                  </TableBody>
                </Table>
              </Grid>
            </Modal>
            <Modal
              open={openRate}
              onClose={handleCloseRate}
              slotProps={{
                backdrop: { style: { backgroundColor: "transparent" } },
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                lg={3}
                md={4}
                xs={12}
                sx={{ backgroundColor: "#FFF", textAlign: "center", border: 2 }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Como você avalia o pedido?
                </Typography>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Grid>
            </Modal>
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    width={"10%"}
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Número
                  </TableCell>
                  <TableCell
                    align="right"
                    width={"20%"}
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Data
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Hora
                  </TableCell>
                  <TableCell
                    align="right"
                    width={"15%"}
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="right"
                    width={"20%"}
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    width={"20%"}
                    align="right"
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    Opções
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userOrders.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" width={"10%"} sx={{ fontSize: 17 }}>
                      {row.id}
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 17 }}>
                      {dateFormat(row.date)}
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 17 }}>
                      {row.hour}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: 17,
                      }}
                    >
                      <Typography
                        sx={{
                          color: statusColor(row.order_status_relation.status),
                          fontWeight: "bold",
                        }}
                      >
                        {row.order_status_relation.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 17 }}>
                      R$ {totalFormat(row.total)}
                    </TableCell>
                    <TableCell align="right" width={"10%"}>
                      <Grid>
                        <IconButton
                          color="inherit"
                          onClick={(e) => {
                            e.preventDefault();
                            handleOpenDetails(row);
                          }}
                        >
                          <DescriptionIcon />
                        </IconButton>
                        <Button
                          onClick={handleOpenRate}
                          color="warning"
                          sx={{
                            border: "solid",
                            borderRadius: 0,
                            borderWidth: "1px",
                          }}
                        >
                          Avaliar
                        </Button>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </>
      ) : (
        <Typography
          sx={{
            fontSize: 17,
          }}
        >
          Você não tem pedidos!
        </Typography>
      )}
    </Grid>
  );
}
