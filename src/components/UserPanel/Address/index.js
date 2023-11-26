import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import {
  getUserAddress,
  updateUserAddress,
} from "../../../api/user_address/index.js";
import Cookies from "js-cookie";

export function Address() {
  const id_user = Cookies.get("user_id");

  const [address, setAddress] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "address":
        setAddress(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "postal_code":
        setPostal_code(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      address: address,
      postal_code: postal_code,
      city: city,
    };

    if (data.address || data.postal_code || data.city === "") {
      alert("Todos os campos são obrigatórios!");
    } else {
      await updateUserAddress(id_user, data).then(
        alert("Endereço Atualizado!")
      );
    }
  };

  const handleGetUserAddress = useCallback(async () => {
    const response = await getUserAddress(id_user);
    if (!response.msg) {
      setAddress(response.address);
      setCity(response.city);
      setPostal_code(response.postal_code);
    }
  }, [id_user]);

  useEffect(() => {
    handleGetUserAddress();
  }, [handleGetUserAddress]);

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
        <Typography fontSize={40}>Endereço</Typography>
        <TextField
          InputLabelProps={{ shrink: true }}
          type="text"
          required
          fullWidth
          id="address"
          name="address"
          label="Rua"
          value={address}
          onChange={handleChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          type="text"
          required
          fullWidth
          id="city"
          name="city"
          label="Cidade"
          value={city}
          onChange={handleChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          type="text"
          required
          fullWidth
          id="postal_code"
          name="postal_code"
          label="CEP"
          value={postal_code}
          onChange={handleChange}
        />
        <Grid item display="flex" justifyContent={"center"}>
          <Button
            type="submit"
            id="alterar"
            variant="contained"
            color="primary"
          >
            Salvar Endereço
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}
