import axios from "axios";
import { useParams } from "react-router-dom";
import { baseURL, clientesURL, mascotasURL } from "../../App";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs";
import {
  Avatar,
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../services/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FichaMascota } from "../../Components/FichaMascota/FichaMascota";

export const ClientesDetalle = () => {
  const { id } = useParams();
  const [mascotasDeCliente, setMascotasDeCliente] = useState([]);
  const [cantMascotas, setCantMascotas] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOneCliente = async () => {
    try {
      const response = await axios.get(`${baseURL}${clientesURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };

  const getMascotasdeCliente = async () => {
    try {
      const response = await axios.get(`${baseURL}${mascotasURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      console.log(`${baseURL}${mascotasURL}/${id}`);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };

  useEffect(() => {
    const fetchMascotas = async () => {
      const data = await getMascotasdeCliente();
      setMascotasDeCliente(data);
      setLoading(false);
    };
    const fetchCliente = async () => {
      const data = await getOneCliente();
      setCliente(data);
      setLoading(false);
    };

    fetchCliente();
    fetchMascotas();
    
  }, []);

  useEffect (() => {
    const CantMascotas = async () => {
        if (mascotasDeCliente.length === 0) {
            setCantMascotas(0);
          } else {
            setCantMascotas(mascotasDeCliente.length);
          }
    }
    CantMascotas();
  }, [mascotasDeCliente]);

  if (loading) {
    return <p>Cargando clientes...</p>; // Mensaje mientras se cargan los datos
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BreadCrumbs
          firstpage={"clientes"}
          secondpage={cliente.nombre}
        ></BreadCrumbs>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h2" sx={{ fontWeight: 500 }}>
                Contacto
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                  mt: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "#DED8FA" }}>
                  <PhoneIcon />
                </Avatar>
                <Typography variant="h6">{cliente.telefono}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ bgcolor: "#DED8FA" }}>
                  <EmailIcon />
                </Avatar>
                <Typography variant="h6">{cliente.email}</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 400, mb: 2 }}>
                Mascotas
              </Typography>
              <Box
                sx={{
                  bgcolor: "#f8f9fd",
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: 100,
                  width: "100px", // Esto asegura un ancho fijo si lo necesitas
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                  {cantMascotas}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ mt: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 500 }}>
            Lista de Mascotas
          </Typography>
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
              mt: 5,
            }}
          >
            {mascotasDeCliente.map((mascota) => (
              <FichaMascota key={mascota.id} mascota={mascota} />
            ))}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
