import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { getUserAddress } from "../../../api/user_address/index.js";
import Cookies from "js-cookie";

export function Address() {
  const id_user = Cookies.get("user_id");

  const [userAddress, setUserAddress] = useState({});

  const handleGetUserAddress = useCallback(async () => {
    const response = await getUserAddress(id_user);
    setUserAddress(response);
  }, [id_user]);

  useEffect(() => {
    handleGetUserAddress();
  }, [handleGetUserAddress]);

  return (
    <>
      {userAddress ? (
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
            <Typography variant="h5">Endereço</Typography>
            <TextField
              type="text"
              required
              fullWidth
              id="address"
              name="address"
              label="Rua"
              value={userAddress.address}
            />
            <TextField
              type="text"
              required
              fullWidth
              id="city"
              name="city"
              label="Cidade"
              value={userAddress.city}
            />
            <TextField
              type="text"
              required
              fullWidth
              id="postal_code"
              name="postal_code"
              label="CEP"
              value={userAddress.postal_code}
            />

            <Grid item display="flex" justifyContent={"center"}>
              <Button
                /* type="submit" */
                id="alterar"
                variant="contained"
                color="primary"
              >
                Salvar Endereço
              </Button>
            </Grid>
          </Box>
        </Grid>
      ) : (
        <Typography>Você não cadastrou Endereço!</Typography>
      )}
    </>
  );
}
