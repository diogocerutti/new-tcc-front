import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { updateOrderStatus } from "../../../../../api/order_status";
import { useNavigate } from "react-router-dom";

export default function UpdateModal({ openUpdate, onCloseUpdate, rowStatus }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handleChangeStatus = (event) => setStatus(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      status: status,
    };

    await updateOrderStatus(rowStatus.id, data).then((res) => {
      if (res.name === "AxiosError") {
        alert(res.response.data.msg); // mensagem de erro do BACK
      } else {
        alert("Status de pedido atualizado com sucesso!");
        return navigate(0);
      }
    });
  };

  useEffect(() => {
    if (rowStatus) {
      setStatus(rowStatus.status);
    }
  }, [rowStatus]);

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
            width: "30%",
          }} /* encType="multipart/form-data" */
        >
          <Typography component="h1" variant="h5" color="black">
            Atualizar Status
          </Typography>
          <TextField
            autoComplete="off"
            type="text"
            margin="normal"
            required
            fullWidth
            id="status"
            name="status"
            label="Status"
            value={status}
            onChange={handleChangeStatus}
          />
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
