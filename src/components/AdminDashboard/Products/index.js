import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Button,
  Modal,
  Typography,
  Box,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
} from "../../../api/product/index.js";
import { getAllMeasures } from "../../../api/measure_type/index.js";
import { getAllCategories } from "../../../api/product_category/index.js";
import { useState, useCallback, useEffect } from "react";
import UpdateModal from "./components/updatedModal/index.js";

export default function Products() {
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
      <Grid container justifyContent={"center"}>
        <Grid
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          xs={12}
          md={12}
          lg={10}
        >
          <Typography variant="h5">Produtos</Typography>
          <IconButton onClick={handleOpen}>
            <AddCircleIcon color="success" sx={{ fontSize: "3vw" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
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
            sx={{ mt: 10, backgroundColor: "white", padding: 2 }}
          >
            <Typography component="h1" variant="h5" color="black">
              Cadastrar Produto
            </Typography>
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
            <Grid item display={"flex"} columnGap={5}>
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
            </Grid>
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
            <Grid item mt={2} display={"flex"} justifyContent={"center"}>
              <Button
                type="submit"
                id="cadastrar"
                variant="contained"
                color="success"
              >
                Cadastrar
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Modal>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} md={12} lg={10}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
                  ID
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Preço
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Unidade Medida
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Descrição
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Categoria
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Imagem
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  Opções
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Grid
                      item
                      sx={{ display: "flex" }}
                      justifyContent={"space-between"}
                    >
                      <Typography fontSize={17}>{row.id}</Typography>
                      {row.status === "true" ? (
                        <img
                          alt="status"
                          src={require("../../../images/true.png")}
                          style={{ height: "1.1vw", width: "1.1vw" }}
                        />
                      ) : (
                        <img
                          alt="status"
                          src={require("../../../images/false.png")}
                          style={{ height: "1.1vw", width: "1.1vw" }}
                        />
                      )}
                    </Grid>
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.price}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.measure}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    ...
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.category}
                  </TableCell>
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
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        alert("Produto removido!");
                        await deleteProduct(row.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <UpdateModal
        openUpdate={openUpdate}
        rowData={currentData}
        onCloseUpdate={handleCloseUpdate}
        measures={measures}
        categories={categories}
      />
    </>
  );
}
