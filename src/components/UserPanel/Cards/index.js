import { Typography, Grid, Box, TextField, Button } from "@mui/material";

export function Cards() {
  return (
    <Grid container justifyContent={"center"}>
      <Box
        sx={{ backgroundColor: "#FFF" }}
        rowGap={2}
        display={"flex"}
        flexDirection={"column"}
        marginTop={5}
        width={"50%"}
        padding={3}
        borderRadius={3}
      >
        <Typography variant="h5">Cartão de Crédito</Typography>
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            type="text"
            required
            fullWidth
            id="name"
            name="name"
            label="Titular"
          />
          <TextField
            type="text"
            required
            fullWidth
            id="cpf"
            name="cpf"
            label="CPF"
          />
        </Grid>
        <TextField
          type="text"
          required
          fullWidth
          id="number"
          name="number"
          label="Número do Cartão"
        />
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            type="text"
            required
            fullWidth
            id="date"
            name="date"
            label="Data de Validade"
          />
          <TextField
            type="text"
            required
            fullWidth
            id="cvv"
            name="cvv"
            label="CVV"
          />
        </Grid>

        <Button
          id="enviar"
          variant="contained"
          color="primary"
          sx={{ display: "flex", width: "50%", alignSelf: "center" }}
        >
          Salvar Cartão
        </Button>
      </Box>
    </Grid>
  );
}
