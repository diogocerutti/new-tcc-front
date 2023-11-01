import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
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
          return navigate("/admin/dashboard");
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
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="black">
          LOGIN ADMIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
