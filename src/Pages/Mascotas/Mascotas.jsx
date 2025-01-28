import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, mascotasURL } from "../../App.jsx";
import { Box, Container, Pagination } from "@mui/material";
import { FichaMascota } from "../../Components/FichaMascota/FichaMascota.jsx";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from '../../services/theme.js'
import { ListaMascotas } from "../../Components/ListaMascotas/ListaMascotas.jsx";

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
    <BreadCrumbs firstpage={"Mascotas"}></BreadCrumbs>
   <ListaMascotas></ListaMascotas>
    </ThemeProvider>
    </>
  );
};
