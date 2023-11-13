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
          <Box
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
          >
            <Typography variant="h5">Detalhes da Conta</Typography>
            <TextField
              type="text"
              required
              fullWidth
              id="name"
              name="name"
              label="Nome"
              value={userDetails.name}
            />
            <TextField
              type="email"
              required
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={userDetails.email}
            />
            <TextField
              type="tel"
              required
              fullWidth
              id="phone"
              name="phone"
              label="Telefone"
              value={userDetails.phone}
            />
            <TextField
              type="password"
              required
              fullWidth
              id="currentPassword"
              name="currentPassword"
              label="Senha Atual"
            />
            <TextField
              type="password"
              required
              fullWidth
              id="newPassword"
              name="newPassword"
              label="Nova Senha"
            />
            <TextField
              type="password"
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
