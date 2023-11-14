import { Typography, Grid } from "@mui/material";

export default function About() {
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
          Sobre nós &#128151;
        </Typography>
        <Typography variant="h5" mt={8}>
          Somos uma empresa que visa o melhor para o cliente, com qualidade no
          serviço e atendimento. Deixando seus eventos mais deliciosos com
          nossos produtos. Nossa missão é alimentar a alma das pessoas com amor
          e alegria, compartilhando o pão nosso de cada dia!
        </Typography>
      </Grid>
    </Grid>
  );
}
