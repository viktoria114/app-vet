/* eslint-disable react/prop-types */
import { Box, Container, Pagination } from "@mui/material";

export const MidPagination = ({xPorPagina, total, setPaginaActual}) => {

  const cantPaginas = []
  
  for (let i = 1; i <= Math.ceil(total/xPorPagina); i++){
    cantPaginas.push(i)
 }

 const handleChange = (event, value) => {
  setPaginaActual(value)
};
 
    return ( 
        <Container>
         <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center", // Opcional: centra verticalmente si es necesario
          mt: 3, // Margen superior para separar la paginación de las tarjetas
        }}
      >
        <Pagination
          count={cantPaginas.length}
          onChange={handleChange}
          color="secondary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "gray", // Cambia el color del texto
            },
            "& .Mui-selected": {
              color: "white", // Texto blanco en la página seleccionada
            },
          }}
        />
      </Box>
      </Container>
     );
}