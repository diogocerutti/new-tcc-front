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
import { useState } from "react";

export default function UpdateModal({ openUpdate, onCloseUpdate }) {
  const [orderStatus, setOrderStatus] = useState("1");

  const handleChangeOrderStatus = (event) => {
    setOrderStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Pedido Atualizado!");
  };

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
            type="date"
            margin="normal"
            required
            fullWidth
            id="date"
            name="date"
            label="Data"
            value="2023-12-19"
          />
          <TextField
            type="time"
            margin="normal"
            required
            fullWidth
            id="hour"
            name="hour"
            label="Hora"
            value="15:00"
          />
          <FormControl>
            <FormLabel id="order_status">Status</FormLabel>
            <RadioGroup
              defaultValue="1"
              name="order_status"
              value={orderStatus}
              onChange={handleChangeOrderStatus}
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
