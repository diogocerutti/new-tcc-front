import { Typography, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={9} md={9} lg={7} textAlign={"center"} mt={8}>
        <Typography
          variant="h4"
          color={"#FFF"}
          fontSize={50}
          fontWeight={"bold"}
          sx={{ WebkitTextStrokeWidth: 2, WebkitTextStrokeColor: "#000" }}
        >
          Informações de Contato &#128222;
        </Typography>
        <Typography variant="h5" mt={8}>
          Telefone: +55(49)3322-1058
        </Typography>
        <Typography variant="h5">WhatsApp: +55(49)98817-4925</Typography>
        <Typography variant="h5" mt={4}>
          E-mail: falecom@padariadonana.com.br
        </Typography>
        <Typography variant="h5" mt={4}>
          Endereço: Rua Sete de Setembro, 620-D, Bairro Presidente Médici
        </Typography>
      </Grid>
    </Grid>
  );
}
