import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";

export default function UpdateModal({ openUpdate, onCloseUpdate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Status de Pedido Atualizado!");
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
            Atualizar Status
          </Typography>
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="status"
            name="status"
            label="Status"
            value="Aguardando Pagamento"
          />

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
