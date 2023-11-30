import {
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useState, useEffect } from "react";
import { updateAdmin, createAdmin } from "../../../../../api/admin/index.js";
import { useNavigate } from "react-router-dom";

export default function ModalForm({
  openModal,
  onCloseModal,
  rowAdmin,
  modalType,
}) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "username":
        setUsername(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "status":
        setStatus(event.target.checked);
        break;
      case "currentPassword":
        setCurrentPassword(event.target.value);
        break;
      case "newPassword":
        setNewPassword(event.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data =
      newPassword !== ""
        ? {
            name: name,
            username: username,
            email: email,
            password: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
            status: status,
          }
        : {
            name: name,
            username: username,
            email: email,
            password: currentPassword,
            status: status,
          };

    if (modalType === "put") {
      await updateAdmin(rowAdmin.id, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Usuário Admnistrador atualizado com sucesso!");
          return navigate(0);
        }
      });
    }
    if (modalType === "post") {
      await createAdmin(data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          alert("Usuário Administrador criado com sucesso!");
          return navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    if (modalType === "put") {
      if (rowAdmin) {
        setName(rowAdmin.name);
        setUsername(rowAdmin.username);
        setEmail(rowAdmin.email);
        setStatus(rowAdmin.status);
      }
    }
    if (modalType === "post") {
      setName("");
      setUsername("");
      setEmail("");
      setStatus(true);
    }
  }, [rowAdmin, modalType]);

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
              ? "Editar Usuário Administrador"
              : "Criar Usuário Administrador"}
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
            type="text"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            label="Usuário"
            value={username}
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
          <TextField
            autoComplete="off"
            type="password"
            margin="normal"
            required
            fullWidth
            id="currentPassword"
            name="currentPassword"
            label="Senha"
            value={currentPassword}
            onChange={handleChange}
          />
          {modalType === "put" && (
            <TextField
              autoComplete="off"
              type="password"
              margin="normal"
              required
              fullWidth
              id="newPassword"
              name="newPassword"
              label="Nova Senha"
              value={newPassword}
              onChange={handleChange}
            />
          )}
          <TextField
            autoComplete="off"
            type="password"
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmar Senha"
            value={confirmPassword}
            onChange={handleChange}
          />
          {modalType === "put" && (
            <FormGroup>
              <FormControlLabel
                label="Ativo?"
                id="status"
                name="status"
                checked={status}
                control={<Switch onChange={handleChange} />}
              />
            </FormGroup>
          )}
          <Grid item mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              fullWidth
              id="form-submit"
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
