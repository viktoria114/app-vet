import { Box, Container, Pagination } from "@mui/material";
import { FichaMascota } from "../FichaMascota/FichaMascota";

export const ListaMascotas = () => {
    return (  
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
      </Container> );
}