/* eslint-disable react/prop-types */
import { Box, Container } from "@mui/material";
import { FichaCliente } from "../FichaCliente/FichaCliente";

export const styleBox1 = {
  bgcolor: "#f8f9fd",
  boxShadow: 1,
  borderRadius: 2,
  p: 2,
  minWidth: 300,
  display: "grid",
  gridTemplateColumns: {sm:"repeat(3, 1fr)", xs:"repeat(1,1fr)"}, // Tres columnas iguales
  gap: 2, // Espaciado entre las tarjetas
  justifyContent: "center",
  mb:2
};

export const ListaClientes = ({ clientes}) => {
  
  return (
    <Container>
      <Box sx={styleBox1}>
        {clientes.map((cliente) => (
          <FichaCliente key={cliente._id} cliente={cliente} />
        ))}
      </Box>
    </Container>
  );
};
