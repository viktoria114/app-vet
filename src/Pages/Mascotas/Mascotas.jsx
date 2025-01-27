import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, mascotasURL } from "../../App.jsx";
import { Box, Container, Pagination } from "@mui/material";
import { FichaMascota } from "../../Components/FichaMascota/FichaMascota.jsx";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from '../../services/theme.js'

const getMascotas = async () => {
  try {
    const response = await axios.get(`${baseURL}${mascotasURL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return []; // Devuelve un arreglo vacío si hay error
  }
};

export const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]); // Estado para almacenar las mascotas
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga

    useEffect(() => {
      const fetchMascotas = async () => {
        const data = await getMascotas();
        setMascotas(data); // Guarda los datos en el estado
        setLoading(false); // Desactiva el indicador de carga
      };
  
      fetchMascotas(); // Llama a la función
    }, []);

  if (loading) {
    return <p>Cargando mascotas...</p>; // Mensaje mientras se cargan los datos
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <BreadCrumbs page={"Mascotas"}></BreadCrumbs>
    <Container>
      <Box
        sx={{
          bgcolor: "#f8f9fd",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Tres columnas iguales
          gap: 2, // Espaciado entre las tarjetas
        }}
      >
        {mascotas.map((mascota) => (
          <FichaMascota key={mascota.id} mascota={mascota} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center", // Opcional: centra verticalmente si es necesario
          mt: 3, // Margen superior para separar la paginación de las tarjetas
        }}
      >
        <Pagination
          count={5}
          color="secondary"
          sx={{
            "& .MuiPaginationItem-root": {
              fontFamily: "Montserrat, sans-serif", // Cambia la fuente
              color: "gray", // Cambia el color del texto
            },
            "& .Mui-selected": {
              color: "white", // Texto blanco en la página seleccionada
            },
          }}
        />
      </Box>
    </Container>
    </ThemeProvider>
    </>
  );
};
