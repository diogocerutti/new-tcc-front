import { Button, Modal, Typography, Box } from "@mui/material";
import { useState } from "react";

export default function UpdateModal(openUpdate) {
  const [open, setOpenUpdate] = useState(openUpdate);

  const handleCloseUpdate = () => setOpenUpdate(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("oi");
  };

  return (
    <Modal open={open} onClose={handleCloseUpdate}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Typography component="h1" variant="h5" color="black">
          Atualizar Produto
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            id="cadastrar"
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Atualizar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
