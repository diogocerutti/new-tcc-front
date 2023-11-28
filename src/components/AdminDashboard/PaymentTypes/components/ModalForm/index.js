import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import {
  updatePaymentType,
  createPaymentType,
} from "../../../../../api/payment_type";
import { useNavigate } from "react-router-dom";

export default function ModalForm({
  openModal,
  onCloseModal,
  rowType,
  modalType,
}) {
  const navigate = useNavigate();
  const [type, setType] = useState("");

  const handleChangeType = (event) => setType(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      type: type,
    };

    if (modalType === "put") {
      await updatePaymentType(rowType.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Tipo de pagamento atualizado com sucesso!");
          return navigate(0);
        }
      });
    }
    if (modalType === "post") {
      await createPaymentType(data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Tipo de pagamento criado com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowType) {
        setType(rowType.type);
      }
    }
    if (modalType === "post") {
      setType("");
    }
  }, [rowType, modalType]);

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
              ? "Editar Tipo de pagamento"
              : "Criar Tipo de pagamento"}
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
            value={type}
            onChange={handleChangeType}
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
