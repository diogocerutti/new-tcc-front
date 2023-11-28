import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import cancelled from "../../../images/cancelado.png";
import finished from "../../../images/finalizado.png";
import moviment from "../../../images/movimento.png";
import prepare from "../../../images/preparacao.png";
import UpdateModal from "./components/updateModal";
import { useState, useCallback, useEffect } from "react";
import { getAllOrders } from "../../../api/order";

export default function Orders() {
  const orderImg = [
    { title: "Cancelado", image: cancelled },
    { title: "Finalizado", image: finished },
    { title: "Em movimento", image: moviment },
    { title: "Em preparação", image: prepare },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Em preparação":
        return "#f9d34f";
      case "Aguardando pagamento":
        return "#dddddd";
      case "Em movimento":
        return "#70e3fc";
      case "Finalizado":
        return "#8ad072";
      case "Cancelado":
        return "#ef6363";
      default:
        return "#FFF";
    }
  };

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState();

  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpenUpdate = () => setOpenUpdate(true);

  const handleCloseUpdate = () => setOpenUpdate(false);

  const handleGetOrders = useCallback(async () => {
    const response = await getAllOrders();
    setOrders(response);
  }, []);

  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={10}>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Pedidos</Typography>
            <Grid
              item
              display={"flex"}
              justifyContent={"space-between"}
              lg={9}
              md={9}
              xs={9}
            >
              <Typography>Legenda: </Typography>
              {orderImg.map((row) => (
                <Grid item display={"flex"} key={row.title}>
                  <img src={row.image} alt={row.title} width={25} />
                  <Typography> {row.title}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Table sx={{ mt: 6 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  ID
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Cliente
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Endereço
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Telefone
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Data Previsão
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Hora
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Opções
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: statusColor(
                      row.order_status_relation.status
                    ),
                  }}
                >
                  <TableCell align="left" sx={{ fontSize: 17 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.user_relation.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.user_relation.user_address_relation.address}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.user_relation.phone}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.date}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.hour}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenUpdate();
                        setCurrentOrder(row);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <UpdateModal
        openUpdate={openUpdate}
        onCloseUpdate={handleCloseUpdate}
        rowOrder={currentOrder}
      />
    </>
  );
}
