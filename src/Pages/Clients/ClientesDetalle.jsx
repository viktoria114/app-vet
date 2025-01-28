import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../../services/theme";
import { FichaMascota } from "../../Components/FichaMascota/FichaMascota";
import { useClientesDetalle } from "../../hooks/useClientesDetalle";
import { Contacto } from "../../Components/Contacto/Contacto";
import { NewMascota } from "../../Components/NewMascota/NewMascota";

export const ClientesDetalle = () => {
  const { id } = useParams();
  const { mascotasDeCliente, cantMascotas, cliente, loading } =
    useClientesDetalle({ id });

  if (loading) {
    return <p>Cargando clientes...</p>; // Mensaje mientras se cargan los datos
  }

  if (cantMascotas) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <BreadCrumbs
            firstpage={"clientes"}
            secondpage={cliente.nombre}
          ></BreadCrumbs>

          <Contacto cliente={cliente} cantMascotas={cantMascotas}></Contacto>

          <Container sx={{ mt: 10 }}>
            <Grid>
              <Grid xs={2}>
                <Typography variant="h2" sx={{ fontWeight: 500 }}>
                  Lista de Mascotas
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
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
            <NewMascota id={id} />
          </Container>
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BreadCrumbs
          firstpage={"clientes"}
          secondpage={cliente.nombre}
        ></BreadCrumbs>

        <Contacto cliente={cliente} cantMascotas={cantMascotas}></Contacto>

        <Container sx={{ mt: 10 }}>
          <NewMascota id={id} />
        </Container>
      </ThemeProvider>
    </>
  );
};
