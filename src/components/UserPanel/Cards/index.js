import { Typography, Grid, Box, TextField, Button } from "@mui/material";

export function Cards() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    alert("Cartão Atualizado!");
  };

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
        <Typography fontSize={40}>Cartão de Crédito</Typography>
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="name"
            name="name"
            label="Titular"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="cpf"
            name="cpf"
            label="CPF"
          />
        </Grid>
        <TextField
          InputLabelProps={{ shrink: true }}
          type="text"
          required
          fullWidth
          id="number"
          name="number"
          label="Número do Cartão"
        />
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="date"
            name="date"
            label="Data de Validade"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="cvv"
            name="cvv"
            label="CVV"
          />
        </Grid>
        <Button
          type="submit"
          id="enviar"
          variant="contained"
          color="primary"
          sx={{ display: "flex", width: "40%", alignSelf: "center" }}
        >
          Salvar Cartão
        </Button>
      </Box>
    </Grid>
  );
}
