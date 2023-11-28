import {
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  MenuItem,
  Switch,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { updateProduct } from "../../../../../api/product/index.js";
import { useState, useEffect } from "react";

export default function UpdateModal({
  openUpdate,
  rowData,
  onCloseUpdate,
  measures,
  categories,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [id_measure, setId_measure] = useState("");
  const [id_category, setId_category] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [status, setStatus] = useState();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeMeasure = (event) => {
    setId_measure(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setId_category(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleChangeStatus = (event) => {
    if (event.target.checked === true) {
      setStatus("true");
    } else {
      setStatus("false");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("id_measure", id_measure);
    formData.append("id_category", id_category);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("status", status);

    await updateProduct(formData, rowData.id).then((res) => console.log(res));
  };

  useEffect(() => {
    if (rowData) {
      setName(rowData.name);
      setPrice(rowData.price);
      setId_measure(rowData.id_measure);
      setId_category(rowData.id_category);
      setDescription(rowData.description);
      setImage(rowData.image);
      setStatus(rowData.status);
    }
  }, [rowData]);

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
          }} /* encType="multipart/form-data" */
        >
          <Typography component="h1" variant="h5" color="black">
            Atualizar Produto
          </Typography>
          <TextField
            autoComplete="off"
            type="text"
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Nome"
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            autoComplete="off"
            type="number"
            margin="normal"
            required
            fullWidth
            id="price"
            name="price"
            label="Preço"
            value={price}
            onChange={handleChangePrice}
          />
          <Grid item display={"flex"} columnGap={5}>
            <TextField
              autoComplete="off"
              select
              margin="normal"
              required
              fullWidth
              id="id_measure"
              name="id_measure"
              label="Unidade de medida"
              value={id_measure}
              onChange={handleChangeMeasure}
            >
              {measures.map((row) => (
                <MenuItem key={row.id} id="measureOption" value={row.id}>
                  {row.measure}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              autoComplete="off"
              select
              margin="normal"
              required
              fullWidth
              id="id_category"
              name="id_category"
              label="Categoria"
              value={id_category}
              onChange={handleChangeCategory}
            >
              {categories.map((row) => (
                <MenuItem key={row.id} id="categoryOption" value={row.id}>
                  {row.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <TextField
            autoComplete="off"
            type="text"
            margin="normal"
            fullWidth
            id="description"
            name="description"
            label="Descrição"
            rows={2}
            multiline
            value={description}
            onChange={handleChangeDescription}
          />
          <Grid item>
            <Typography>Imagem</Typography>
            <input
              filename={image}
              onChange={handleChangeImage}
              type="file"
              accept="image/*"
              id="image"
              name="image"
            ></input>
          </Grid>
          <FormGroup>
            <FormControlLabel
              label="Ativo?"
              control={<Switch onChange={handleChangeStatus} />}
            />
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
