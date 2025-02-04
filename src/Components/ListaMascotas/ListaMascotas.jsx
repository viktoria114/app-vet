/* eslint-disable react/prop-types */
import { Box, Container } from "@mui/material";
import { FichaMascota } from "../FichaMascota/FichaMascota";
import { styleBox1 } from "../ListaClientes/ListaClientes";

export const ListaMascotas = ({ mascotas }) => {
  return (
    <Container>
      <Box sx={styleBox1}>
        {mascotas.map((mascota) => (
          <FichaMascota key={mascota._id} mascota={mascota} />
        ))}
      </Box>
    </Container>
  );
};
