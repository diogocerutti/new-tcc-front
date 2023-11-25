import { Typography, TextField, Box, Button, Grid } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getOneUser } from "../../../api/user";
import Cookies from "js-cookie";

export function Details() {
  const id_user = Cookies.get("user_id");

  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    alert("Dados Atualizados!");
  };

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
              InputLabelProps={{ shrink: true }}
              type="text"
              required
              fullWidth
              id="name"
              name="name"
              label="Nome"
              value={userDetails.name}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              type="email"
              required
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              value={userDetails.email}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
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
      ) : (
        <Typography>Ocorreu algum erro. Tente recarregar a página!</Typography>
      )}
    </>
  );
}
