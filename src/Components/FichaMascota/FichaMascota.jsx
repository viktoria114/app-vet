/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia } from "@mui/material";
import { useState } from "react";
import { ModalDetalles } from "../ModalDetalles/ModalDetalles";

export const FichaMascota = ({ mascota }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styleText = {
    color: "#9c27b0",
    fontWeight: 500,
  };
  return (
    <>
      <Card sx={{ maxWidth: {sm:345, xs:"100%"}   }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="200" src={mascota.myFile} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: 700 }}
            >
              {mascota.nombre}
            </Typography>
            <Typography variant="body2" sx={styleText}>
              Especie: {mascota.especie}
            </Typography>
            <Typography variant="body2" sx={styleText}>
              Raza: {mascota.raza}
            </Typography>
            <Typography variant="body2" sx={styleText}>
              Edad: {mascota.edad}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <ModalDetalles open={open} handleClose={handleClose} mascota={mascota} />
    </>
  );
};
