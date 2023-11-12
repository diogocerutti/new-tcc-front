import { Typography, TextField, Box, Button, Grid } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getOneUser } from "../../../api/user";
import Cookies from "js-cookie";

export function Details() {
  const id_user = Cookies.get("user_id");

  const [userDetails, setUserDetails] = useState({});

  const handleGetUserDetails = useCallback(async () => {
    const response = await getOneUser(id_user);
    setUserDetails(response);
  }, [id_user]);

  useEffect(() => {
    handleGetUserDetails();
  }, [handleGetUserDetails]);

  return (
    <>
      {userDetails ? (
        <Grid container justifyContent={"center"}>
          <Box component="form" noValidate width={"50%"} marginTop={7}>
            <Typography variant="h5">Detalhes da Conta</Typography>
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Nome"
              value={userDetails.name}
            />
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={userDetails.email}
            />
            <TextField
              type="tel"
              margin="normal"
              required
              fullWidth
              id="phone"
              name="phone"
              label="Telefone"
              value={userDetails.phone}
            />
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="currentPassword"
              name="currentPassword"
              label="Senha Atual"
            />
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="newPassword"
              name="newPassword"
              label="Nova Senha"
            />
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar Senha"
            />
            <Grid item display="flex" justifyContent={"center"}>
              <Button
                /* type="submit" */
                id="alterar"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Salvar Alterações
              </Button>
            </Grid>
          </Box>
        </Grid>
      ) : (
        <Typography>Ocorreu algum erro. Tente recarregar a página!</Typography>
      )}
    </>
  );
}
