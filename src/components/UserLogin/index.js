import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import { userLogin, createUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserLoginForm() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "emailRegister":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "passwordRegister":
        setPassword(event.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const payload = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    userLogin(payload).then((res) => {
      // ele vai sempre entrar no .then(), mesmo que haja erro (não sei pq)
      if (res.name === "AxiosError") {
        alert("E-mail ou senha incorretos."); // mensagem de erro do BACK
      } else {
        alert("LOGADO COM SUCESSO");
        return navigate("/");
      }
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    };

    await createUser(data).then((res) => {
      if (res.name === "AxiosError") {
        alert(res.response.data.msg); // mensagem de erro do BACK
      } else {
        alert("Cadastro feito com sucesso!");
        return navigate("/");
      }
    });
  };

  return (
    <Grid container component="main" maxWidth="xs" justifyContent={"center"}>
      <Grid
        item
        display={"flex"}
        width={"50%"}
        justifyContent={"space-between"}
        marginTop={8}
        columnGap={2}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          noValidate
          width={"50%"}
          height={"50%"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          borderRadius={2}
          border={1}
          sx={{
            backgroundColor: "#FFF",
          }}
        >
          <Typography component="h1" variant="h5" color="black">
            Login
          </Typography>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ width: "65%", alignSelf: "center" }}
          >
            Entrar
          </Button>
        </Box>
        <Box
          component="form"
          onSubmit={handleRegister}
          noValidate
          width={"50%"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          borderRadius={2}
          border={1}
          height={"auto"}
          rowGap={3}
          sx={{
            backgroundColor: "#FFF",
          }}
        >
          <Typography component="h1" variant="h5" color="black">
            Cadastre-se
          </Typography>
          <TextField
            autoComplete="off"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoFocus
            value={name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="emailRegister"
            label="Email"
            name="emailRegister"
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="passwordRegister"
            label="Senha"
            name="passwordRegister"
            type="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirmar Senha"
            name="confirmPassword"
            type="password"
            autoComplete="off"
            value={confirmPassword}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            type="tel"
            autoComplete="off"
            value={phone}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ width: "65%", alignSelf: "center" }}
          >
            Cadastre-se
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
