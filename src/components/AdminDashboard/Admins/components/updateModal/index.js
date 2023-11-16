import {
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

export default function UpdateModal({ openUpdate, onCloseUpdate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Usuário Administrador Atualizado!");
  };

  return (
    <Modal open={openUpdate} onClose={onCloseUpdate}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 10,
            backgroundColor: "white",
            padding: 2,
            width: "30%",
          }} /* encType="multipart/form-data" */
        >
          <Typography component="h1" variant="h5" color="black">
            Atualizar Usuário Administrador
          </Typography>
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Nome"
            value="Diogo Cerutti"
          />
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="user"
            name="user"
            label="Usuário"
            value="diogoc"
          />
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            value="diogo@d.com"
          />
          <FormGroup>
            <FormControlLabel label="Ativo?" control={<Switch />} />
          </FormGroup>

          <Grid item mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              type="submit"
              fullWidth
              id="update"
              variant="contained"
              color="success"
            >
              Atualizar
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
}
