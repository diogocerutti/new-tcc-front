import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import {
  getUserCreditCard,
  createUserCreditCard,
  updateUserCreditCard,
  deleteUserCreditCard,
} from "../../../api/credit_card";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Cards() {
  const id_user = Cookies.get("user_id");
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [cvv, setCvv] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [hasCreditCard, setHasCreditCard] = useState();

  function dateFormat(date) {
    let newDate;
    newDate =
      date.substring(8, 10) +
      "/" +
      date.substring(5, 7) +
      "/" +
      date.substring(0, 4);
    return newDate;
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "cpf":
        setCpf(event.target.value);
        break;
      case "cvv":
        setCvv(event.target.value);
        break;
      case "date":
        setExpireDate(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return "";
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    await deleteUserCreditCard(id_user).then((res) => {
      if (res.name === "AxiosError") {
        alert(res.response.data.msg); // mensagem de erro do BACK
      } else {
        alert("Cartão removido com sucesso!");
        return navigate(0);
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      name: name,
      cpf: cpf,
      cvv: cvv,
      expire_date: dateFormat(expireDate),
      number: number,
    };

    if (hasCreditCard === true) {
      await updateUserCreditCard(id_user, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          console.log("DEU CERTO!", res);
          alert("Cartão atualizado com sucesso!");
        }
      });
    }
    if (hasCreditCard === false) {
      await createUserCreditCard(id_user, data).then((res) => {
        if (res.name === "AxiosError") {
          alert(res.response.data.msg); // mensagem de erro do BACK
        } else {
          console.log("DEU CERTO!", res);
          setHasCreditCard(true);
          alert("Cartão criado com sucesso!");
        }
      });
    }
  };

  const handleGetUserCreditCard = useCallback(async () => {
    const response = await getUserCreditCard(id_user);
    if (response.msg) {
      setHasCreditCard(false);
    } else {
      setHasCreditCard(true);
      setCpf(response.cpf);
      setCvv(response.cvv);
      setExpireDate(response.expire_date);
      setName(response.name);
      setNumber(response.number);
    }
  }, [id_user]);

  useEffect(() => {
    handleGetUserCreditCard();
  }, [handleGetUserCreditCard]);

  return (
    <Grid container justifyContent={"center"}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        noValidate
        sx={{ backgroundColor: "#FFF" }}
        rowGap={2}
        display={"flex"}
        flexDirection={"column"}
        marginTop={5}
        width={"50%"}
        padding={3}
        borderRadius={3}
        border={1}
      >
        <Typography fontSize={40}>Cartão de Crédito</Typography>
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="name"
            name="name"
            label="Titular"
            value={name}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="cpf"
            name="cpf"
            label="CPF"
            value={cpf}
            onChange={handleChange}
          />
        </Grid>
        <TextField
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          type="text"
          required
          fullWidth
          id="number"
          name="number"
          label="Número do Cartão"
          value={number}
          onChange={handleChange}
        />
        <Grid item display={"flex"} columnGap={2}>
          <TextField
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            type="date"
            required
            fullWidth
            id="date"
            name="date"
            label="Data de Validade"
            value={expireDate}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            InputLabelProps={{ shrink: true }}
            type="text"
            required
            fullWidth
            id="cvv"
            name="cvv"
            label="CVV"
            value={cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent={hasCreditCard === true ? "space-evenly" : "center"}
        >
          <Button type="submit" id="update" variant="contained" color="primary">
            Salvar Cartão
          </Button>
          {hasCreditCard === true && (
            <Button
              type="button"
              id="delete"
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              Excluir Cartão
            </Button>
          )}
        </Grid>
      </Box>
    </Grid>
  );
}
