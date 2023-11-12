import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState, useCallback, useEffect } from "react";
import { getUserOrders } from "../../../api/order";
import Cookies from "js-cookie";

export function Orders() {
  const id_user = Cookies.get("user_id");
  const [userOrders, setUserOrders] = useState([]);

  const handleGetUserOrders = useCallback(async () => {
    const response = await getUserOrders(id_user);
    setUserOrders(response);
  }, [id_user]);

  useEffect(() => {
    handleGetUserOrders();
  }, [handleGetUserOrders]);

  return (
    <>
      {userOrders.length !== 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Número</TableCell>
                <TableCell align="right">Data</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Opções</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {userOrders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" width="10%">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">
                    {row.order_status_relation.status}
                  </TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right" width={"10%"}>
                    <Grid>
                      <IconButton>
                        <DescriptionIcon />
                      </IconButton>
                      <Button
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
        </TableContainer>
      ) : (
        <Typography>Você não tem pedidos!</Typography>
      )}
    </>
  );
}
