import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Contacto } from "../../Components/Contacto/Contacto";
import { NewMascota } from "../../Components/NewMascota/NewMascota";
import { ListaMascotas } from "../../Components/ListaMascotas/ListaMascotas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClienteDetalle,
  fetchMascotasDeCliente,
  clearClienteDetalle,
} from "../../store/slices/ClienteDetalleSlice/ClienteDetalleSlice.jsx";

export const ClientesDetalle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { cliente, mascotasDeCliente, cantMascotas, loading } = useSelector(
    (state) => state.clienteDetalle
  );

  useEffect(() => {
    dispatch(fetchClienteDetalle(id));
    dispatch(fetchMascotasDeCliente(id));

    return () => {
      dispatch(clearClienteDetalle());
    };
  }, [dispatch, id]);

  if (loading || !cliente) {
    return (
      <>
        <LinearProgress color="secondary" value={loading} />
      </>
    );
  }

  if (cantMascotas) {
    return (
      <>
        <BreadCrumbs
          firstpage={"Clientes"}
          secondpage={cliente.nombre}
        ></BreadCrumbs>

        <Contacto cliente={cliente} cantMascotas={cantMascotas}></Contacto>

        <Container sx={{ mt: 10 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography
                sx={{
                  typography: { xs: "h3", sm: "h2" },
                  fontWeight: { sm: 500, xs: 600 },
                }}
              >
                Mascotas
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
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
                  width: "100px",
                  mb: "15px",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                  {cantMascotas}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <ListaMascotas mascotas={mascotasDeCliente} />
          <NewMascota id={id} />
        </Container>
      </>
    );
  }

  return (
    <>
      <BreadCrumbs
        firstpage={"Clientes"}
        secondpage={cliente.nombre}
      ></BreadCrumbs>

      <Contacto cliente={cliente} cantMascotas={cantMascotas}></Contacto>

      <Container sx={{ mt: 10 }}>
        <NewMascota id={id} />
      </Container>
    </>
  );
};
