import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import { userLogin } from "../../api/user";

export default function UserLoginForm({ type }) {
  const handleSubmit = (event) => {
    if (type === "login") {
      event.preventDefault();

      const payload = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      };

      userLogin(payload).then((res) => {
        // ele vai sempre entrar no .then(), mesmo que haja erro (não sei pq)
        if (res.name === "AxiosError") {
          console.log("DEU ERRO!", res.response.data.msg); // mensagem de erro do BACK
        } else {
          console.log("DEU CERTO!", res);
        }
      });
    } else {
      console.log("register!!");
    }
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
          onSubmit={handleSubmit}
          noValidate
          width={"50%"}
          height={"50%"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          borderRadius={2}
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
            autoFocus
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
            autoComplete="current-password"
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
          onSubmit={handleSubmit}
          noValidate
          width={"50%"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          borderRadius={2}
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
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoFocus
          />
          <TextField
            required
            fullWidth
            id="emailRegister"
            label="Email"
            name="emailRegister"
            autoComplete="email"
            autoFocus
          />
          <TextField
            required
            fullWidth
            id="passwordRegister"
            label="Senha"
            name="passwordRegister"
            type="password"
          />
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirmar Senha"
            name="confirmPassword"
            type="password"
          />
          <TextField
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phone"
            type="tel"
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
