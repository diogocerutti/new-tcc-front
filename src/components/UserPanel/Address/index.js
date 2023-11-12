import { Typography, Grid } from "@mui/material";
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
        <Grid item border={"solid"} sx={{ borderWidth: 1 }}>
          <Typography variant="h6">Endereço</Typography>
          <Typography>Rua: {userAddress.address}</Typography>
          <Typography>Cidade: {userAddress.city}</Typography>
          <Typography>CEP: {userAddress.postal_code}</Typography>
        </Grid>
      ) : (
        <Typography>Você não cadastrou Endereço!</Typography>
      )}
    </>
  );
}
