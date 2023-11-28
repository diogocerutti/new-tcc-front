import {
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Grid,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import { useState, useEffect } from "react";
import { updateOrder } from "../../../../../api/order";
import { useNavigate } from "react-router-dom";

export default function UpdateModal({ openUpdate, onCloseUpdate, rowOrder }) {
  const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState("1");
  const [orderDate, setOrderDate] = useState("");
  const [orderHour, setOrderHour] = useState("");

  function dateFormat(date) {
    let newDate;
    newDate =
      date.substring(8, 10) +
      "/" +
      date.substring(5, 7) +
      "/" +
      date.substring(0, 4);
    return newDate;
  }

  function dateUnformat(date) {
    let newDate;
    newDate =
      date.substring(6, 10) +
      "-" +
      date.substring(3, 5) +
      "-" +
      date.substring(0, 2);
    return newDate;
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case "date":
        setOrderDate(event.target.value);
        break;
      case "hour":
        setOrderHour(event.target.value);
        break;
      case "order_status":
        setOrderStatus(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      date: dateFormat(orderDate),
      hour: orderHour,
      id_status: orderStatus,
    };

    if (data.date === "//" || data.hour === "") {
      alert("Todos os campos são obrigatórios!");
    } else {
      await updateOrder(rowOrder.id, data).then(
        alert("Pedido Atualizado com sucesso!"),
        navigate(0)
      );
    }
  };

  useEffect(() => {
    if (rowOrder) {
      setOrderStatus(rowOrder.id_status);
      setOrderDate(dateUnformat(rowOrder.date));
      setOrderHour(rowOrder.hour);
    }
  }, [rowOrder]);

  return (
    <Modal open={openUpdate} onClose={onCloseUpdate}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 10,
            backgroundColor: "white",
            padding: 2,
          }} /* encType="multipart/form-data" */
        >
          <Typography component="h1" variant="h5" color="black">
            Atualizar Pedido
          </Typography>
          <TextField
            autoComplete="off"
            type="date"
            margin="normal"
            required
            fullWidth
            id="date"
            name="date"
            label="Data"
            value={orderDate}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            type="time"
            margin="normal"
            required
            fullWidth
            id="hour"
            name="hour"
            label="Hora"
            value={orderHour}
            onChange={handleChange}
          />
          <FormControl>
            <FormLabel id="order_status">Status</FormLabel>
            <RadioGroup
              defaultValue="1"
              name="order_status"
              value={orderStatus}
              onChange={handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Aguardando pagamento"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Em preparação"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Em movimento"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="Finalizado"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="Cancelado"
              />
            </RadioGroup>
          </FormControl>
          <Grid item mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              fullWidth
              id="update"
              variant="contained"
              color="success"
            >
              Atualizar
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
}
