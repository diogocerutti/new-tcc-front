import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import {
  updateOrderStatus,
  createOrderStatus,
} from "../../../../../api/order_status";
import { useNavigate } from "react-router-dom";

export default function ModalForm({
  openModal,
  onCloseModal,
  rowStatus,
  modalType,
}) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handleChangeStatus = (event) => setStatus(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      status: status,
    };

    if (modalType === "put") {
      await updateOrderStatus(rowStatus.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Status de pedido atualizado com sucesso!");
          return navigate(0);
        }
      });
    }
    if (modalType === "post") {
      await createOrderStatus(data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Status de pedido criado com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowStatus) {
        setStatus(rowStatus.status);
      }
    }
    if (modalType === "post") {
      setStatus("");
    }
  }, [rowStatus, modalType]);

  return (
    <Modal open={openModal} onClose={onCloseModal}>
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
            {modalType === "put"
              ? "Editar Status de pedido"
              : "Criar Status de pedido"}
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
              id="modal-submit"
              variant="contained"
              color="success"
            >
              {modalType === "put" ? "Atualizar" : "Criar"}
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
}
