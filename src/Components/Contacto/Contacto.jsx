/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ModalBorrar } from "../ModalBorrar/ModalBorrar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalEditar } from "../ModalEditar/ModalEditar";

export const Contacto = ({ cliente, cantMascotas }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const styleBox = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
    mt: 2,
  };

  const styleButton = {
    bgcolor: "#FFFFFF",
    height: 50,
    p: 2,
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <Container>
        <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={8}>
            <Typography sx={{  typography: { xs: "h3", sm: "h2"}, fontWeight: {sm:500, xs:600}}}>
              Contacto
            </Typography>
            <Box sx={styleBox}>
              <Avatar sx={{ bgcolor: "#DED8FA" }}>
                <PhoneIcon />
              </Avatar>
              <Link
                onClick={() => (window.location = "tel:" + cliente.telefono)}
              >
                <Typography variant="h6">{cliente.telefono}</Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ bgcolor: "#DED8FA" }}>
                <EmailIcon />
              </Avatar>
              <Link
                onClick={() => (window.location = "mailto:" + cliente.email)}
              >
                <Typography variant="h6">{cliente.email}</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{  typography: { xs: "h3", sm: "h2"}, fontWeight: {sm:500, xs:600}}}>
              Acciones
            </Typography>

            <Box sx={styleBox}>
              <Button color="black" sx={styleButton} onClick={handleOpen1}>
                <Avatar sx={{ bgcolor: "#DED8FA", mr: 1 }}>
                  <EditIcon />
                </Avatar>
                Editar
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button color="black" sx={styleButton} onClick={handleOpen}>
                <Avatar sx={{ bgcolor: "#DED8FA", mr: 1 }}>
                  <DeleteIcon />
                </Avatar>
                Borrar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <ModalBorrar
        open={open}
        handleClose={handleClose}
        cliente={cliente}
        cantMascotas={cantMascotas}
      />
      <ModalEditar open={open1} handleClose={handleClose1} cliente={cliente} />
    </>
  );
};
