import { Box, Container, createTheme, TextField } from "@mui/material";
import './style.css'
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
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
  
export const NewCliente = () => {
    return ( 
        
        <Container className="radial-ellipse-side"> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Box  sx={{
          bgcolor: "rgba(255, 255, 255, 0,5)",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}>
            <ThemeProvider theme={theme}>
      <TextField
        label="Nombre"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
      />
      <TextField
        label="Correo"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
      />
      <TextField
        label="Teléfono"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
      />
    </ThemeProvider>
        </Box>
        <br />
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </Container>
       
     );
}