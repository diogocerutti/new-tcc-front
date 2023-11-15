import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { adminLogin } from "../../api/admin";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm({ type }) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    if (type === "login") {
      event.preventDefault();

      const payload = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      };

      adminLogin(payload).then((res) => {
        // ele vai sempre entrar no .then(), mesmo que haja erro (não sei pq)
        if (res.name === "AxiosError") {
          console.log("DEU ERRO!", res.response.data.msg); // mensagem de erro do BACK
        } else {
          console.log("DEU CERTO!", res);
          alert("Logado!");
          return navigate("/admin/products");
        }
      });
    } else {
      console.log("register!!");
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="black">
          ADMINISTRAÇÃO
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
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
            sx={{ mt: 3, mb: 2 }}
          >
            ENTRAR
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
