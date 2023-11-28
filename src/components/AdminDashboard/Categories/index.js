import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModalForm from "./components/ModalForm";
import { useState, useCallback, useEffect } from "react";
import {
  getAllCategories,
  deleteCategory,
} from "../../../api/product_category/index.js";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [modalType, setModalType] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGetCategories = useCallback(async () => {
    const response = await getAllCategories();
    setCategories(response);
  }, []);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={10}>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Categorias de Produtos</Typography>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal();
                setModalType("post");
              }}
            >
              <AddCircleIcon color="success" sx={{ fontSize: "3vw" }} />
            </IconButton>
          </Grid>
          <Table sx={{ mt: 6 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontSize: 20, fontWeight: "bold" }}
                >
                  ID
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
                  Opções
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" sx={{ fontSize: 17 }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 17 }}>
                    {row.category}
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal();
                        setCurrentCategory(row);
                        setModalType("put");
                      }}
                    />
                    <DeleteIcon
                      color="error"
                      onClick={async () => {
                        await deleteCategory(row.id).then((res) => {
                          if (res.name === "AxiosError") {
                            alert(res.response.data.msg); // mensagem de erro do BACK
                          } else {
                            alert("Categoria de produto removida com sucesso!");
                            return navigate(0);
                          }
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <ModalForm
        openModal={openModal}
        onCloseModal={handleCloseModal}
        rowCategory={currentCategory}
        modalType={modalType}
      />
    </>
  );
}
