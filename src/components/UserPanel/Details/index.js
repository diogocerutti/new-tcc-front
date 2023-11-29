import { Typography, TextField, Box, Button, Grid } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getOneUser, updateUser } from "../../../api/user";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Details() {
  const navigate = useNavigate();
  const id_user = Cookies.get("user_id");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
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
            email: email,
            phone: phone,
            password: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          }
        : {
            name: name,
            email: email,
            phone: phone,
            password: currentPassword,
          };

    await updateUser(id_user, data).then((res) => {
      if (res.name === "AxiosError") {
        alert(res.response.data.msg); // mensagem de erro do BACK
      } else {
        console.log("DEU CERTO!", res);
        alert("Dados atualizados com sucesso!");
        navigate(0);
      }
    });
  };

  const handleGetUserDetails = useCallback(async () => {
    const response = await getOneUser(id_user);
    setName(response.name);
    setEmail(response.email);
    setPhone(response.phone);
  }, [id_user]);

  useEffect(() => {
    handleGetUserDetails();
  }, [handleGetUserDetails]);

  return (
    <Grid container justifyContent={"center"}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        noValidate
        sx={{ backgroundColor: "#FFF" }}
        rowGap={2}
        display={"flex"}
        flexDirection={"column"}
        marginTop={5}
        width={"50%"}
        padding={3}
        borderRadius={3}
        border={1}
      >
        <Typography fontSize={40}>Detalhes da Conta</Typography>
        <TextField
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          type="text"
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
          InputLabelProps={{ shrink: true }}
          type="email"
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
          InputLabelProps={{ shrink: true }}
          type="tel"
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
          type="password"
          required
          fullWidth
          id="currentPassword"
          name="currentPassword"
          label="Senha Atual"
          onChange={handleChange}
        />
        <TextField
          autoComplete="off"
          type="password"
          required
          fullWidth
          id="newPassword"
          name="newPassword"
          label="Nova Senha"
          onChange={handleChange}
        />
        <TextField
          autoComplete="off"
          type="password"
          required
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar Senha"
          onChange={handleChange}
        />
        <Grid item display="flex" justifyContent={"center"}>
          <Button
            type="submit"
            id="alterar"
            variant="contained"
            color="primary"
          >
            Salvar Alterações
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}
