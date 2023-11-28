import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import {
  updateCategory,
  createCategory,
} from "../../../../../api/product_category";
import { useNavigate } from "react-router-dom";

export default function UpdateModal({
  openModal,
  onCloseModal,
  rowCategory,
  modalType,
}) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const handleChangeCategory = (event) => setCategory(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      category: category,
    };

    if (modalType === "put") {
      await updateCategory(rowCategory.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Categoria de produto atualizada com sucesso!");
          return navigate(0);
        }
      });
    }
    if (modalType === "post") {
      await createCategory(data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Categoria de produto criada com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowCategory) {
        setCategory(rowCategory.category);
      }
    }
    if (modalType === "post") {
      setCategory("");
    }
  }, [rowCategory, modalType]);

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
              ? "Editar Categoria de produto"
              : "Criar Categoria de produto"}
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
            value={category}
            onChange={handleChangeCategory}
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
