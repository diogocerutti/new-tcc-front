import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getAllProducts, createProduct } from "../../api/product";
import { getAllMeasures } from "../../api/measure_type";
import { getAllCategories } from "../../api/product_category";
import { useState, useCallback, useEffect } from "react";
import UpdateModal from "./components/updateModal";

export default function AdminTable() {
  const [products, setProducts] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentData, setCurrentData] = useState();

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [id_measure, setId_measure] = useState("");
  const [id_category, setId_category] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = useState(false);

  const handleOpenUpdate = () => setOpenUpdate(true);

  const handleCloseUpdate = () => setOpenUpdate(false);

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

  const handleGetMeasures = useCallback(async () => {
    const response = await getAllMeasures();
    setMeasures(response);
  }, []);

  const handleGetCategories = useCallback(async () => {
    const response = await getAllCategories();
    setCategories(response);
  }, []);

  const handleGetProducts = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("id_measure", id_measure);
    formData.append("id_category", id_category);
    formData.append("description", description);
    formData.append("image", image);

    await createProduct(formData).then((res) => console.log(res));
  };

  useEffect(() => {
    handleGetProducts();
    handleGetMeasures();
    handleGetCategories();
  }, [handleGetProducts, handleGetMeasures, handleGetCategories]);

  return (
    <>
      <Grid container justifyContent={"space-around"}>
        <Grid item>Usuários</Grid>
        <Grid item>Usuários Administradores</Grid>
        <Grid item>Produtos</Grid>
        <Grid item>Pedidos</Grid>
        <Grid item>
          <Button onClick={handleOpen}>
            <AddCircleIcon color="success" />
          </Button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Typography component="h1" variant="h5" color="black">
            Cadastrar Produto
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Nome"
              onChange={handleChangeName}
            />
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              id="price"
              name="price"
              label="Preço"
              onChange={handleChangePrice}
            />
            <TextField
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
            <TextField
              type="text"
              margin="normal"
              fullWidth
              id="description"
              name="description"
              label="Descrição"
              rows={2}
              multiline
              onChange={handleChangeDescription}
            />
            <input
              filename={image}
              onChange={handleChangeImage}
              type="file"
              accept="image/*"
              id="image"
              name="image"
            ></input>
            <Button
              type="submit"
              fullWidth
              id="cadastrar"
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Unidade Medida</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Imagem</TableCell>
              <TableCell align="right">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.measure}</TableCell>
                <TableCell align="right">...</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">
                  <img
                    alt="imagem"
                    src={require(`C:/Users/diogo/Desktop/Produtos/${row.image}`)}
                    style={{ height: "1.6vw", width: "1.6vw" }}
                  />
                </TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={() => {
                      handleOpenUpdate();
                      setCurrentData(row);
                    }}
                  />
                  <DeleteIcon color="error" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateModal
        openUpdate={openUpdate}
        rowData={currentData}
        onCloseUpdate={handleCloseUpdate}
      />
    </>
  );
}
