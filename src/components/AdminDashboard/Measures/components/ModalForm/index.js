import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { updateMeasure, createMeasure } from "../../../../../api/measure_type";
import { useNavigate } from "react-router-dom";

export default function ModalForm({
  openModal,
  onCloseModal,
  rowMeasure,
  modalType,
}) {
  const navigate = useNavigate();
  const [measure, setMeasure] = useState("");

  const handleChangeMeasure = (event) => setMeasure(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      measure: measure,
    };

    if (modalType === "put") {
      await updateMeasure(rowMeasure.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Unidade de medida atualizada com sucesso!");
          return navigate(0);
        }
      });
    }
    if (modalType === "post") {
      await createMeasure(data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Unidade de medida criada com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowMeasure) {
        setMeasure(rowMeasure.measure);
      }
    }
    if (modalType === "post") {
      setMeasure("");
    }
  }, [rowMeasure, modalType]);

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
              ? "Atualizar Unidade de medida"
              : "Criar Unidade de medida"}
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
            value={measure}
            onChange={handleChangeMeasure}
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
