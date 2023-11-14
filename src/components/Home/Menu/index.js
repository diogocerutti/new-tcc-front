import { Typography, Grid } from "@mui/material";
import background from "../../../images/fundo_menu.jpg";
import torta from "../../../images/torta.jpg";
import pao from "../../../images/pao.jpg";
import salgados from "../../../images/salgados.jpg";

export default function Menu() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        lg={12}
        display={"flex"}
        justifyContent={"center"}
        height={300}
        sx={{ backgroundImage: `url(${background})` }}
      >
        <Grid item xs={3} lg={3} alignSelf={"center"} textAlign={"center"}>
          <Typography
            variant="h2"
            fontFamily="revert"
            sx={{
              border: 1,
              borderWidth: 3,
              borderRadius: 1,
              padding: 1,
              backgroundColor: "#FFF",
              boxShadow: 10,
            }}
          >
            MENU
            <Typography>Deliciosas opções!</Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"space-evenly"}
        xs={11}
        lg={9}
        md={9}
        height={250}
        textAlign={"center"}
        mt={5}
      >
        <Grid
          item
          xs={3}
          lg={3}
          sx={{
            backgroundImage: `url(${torta})`,
            border: 1,
            borderWidth: 3,
            borderRadius: 1,
            boxShadow: 10,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="-moz-initial"
            variant="h4"
            sx={{
              border: 1,
              borderWidth: 3,
              borderRadius: 1,
              padding: 1,
              backgroundColor: "#FFF",
            }}
          >
            TORTAS
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          lg={3}
          sx={{
            backgroundImage: `url(${pao})`,
            border: 1,
            borderWidth: 3,
            borderRadius: 1,
            boxShadow: 10,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="-moz-initial"
            variant="h4"
            sx={{
              border: 1,
              borderWidth: 3,
              borderRadius: 1,
              padding: 1,
              backgroundColor: "#FFF",
            }}
          >
            PÃES
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          lg={3}
          sx={{
            backgroundImage: `url(${salgados})`,
            border: 1,
            borderWidth: 3,
            borderRadius: 1,
            boxShadow: 10,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily="-moz-initial"
            variant="h4"
            sx={{
              border: 1,
              borderWidth: 3,
              borderRadius: 1,
              padding: 1,
              backgroundColor: "#FFF",
            }}
          >
            SALGADOS
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
