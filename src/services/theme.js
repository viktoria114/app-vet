import { createTheme } from "@mui/material/styles";

 const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Cambia el borde a blanco
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Cambia el borde al pasar el mouse
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Cambia el borde al estar enfocado
          },
        },
        input: {
          color: "black", // Cambia el color del texto
        },
      },
    },
  },
});

export default theme