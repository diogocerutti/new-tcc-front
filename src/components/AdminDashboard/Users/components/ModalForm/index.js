import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { updateUserByAdmin } from "../../../../../api/user";
import { useNavigate } from "react-router-dom";

export default function ModalForm({
  openModal,
  onCloseModal,
  rowUser,
  modalType,
}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      phone: phone,
      email: email,
    };

    if (modalType === "put") {
      await updateUserByAdmin(rowUser.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Usuário atualizado com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowUser) {
        setName(rowUser.name);
        setPhone(rowUser.phone);
        setEmail(rowUser.email);
      }
    } else {
      setName("");
      setPhone("");
      setEmail("");
    }
  }, [rowUser, modalType]);

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
            Atualizar Usuário
          </Typography>
          <TextField
            autoComplete="off"
            type="text"
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Nome"
            value={name}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            type="tel"
            margin="normal"
            required
            fullWidth
            id="phone"
            name="phone"
            label="Telefone"
            value={phone}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            value={email}
            onChange={handleChange}
          />
          <Grid item mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              fullWidth
              id="modal-submit"
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
