import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import './style.css'
import { useState } from "react";
import axios from "axios";
import { baseURL, clientesURL } from "../../App";


export const NewCliente = () => {
const [clientesForm, setClientesForm] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });

  const createPost = async () => {
    const newCliente = {
      nombre: clientesForm.nombre,
      telefono: clientesForm.telefono,
      email: clientesForm.email,
    };

    try {
      await axios.post(`${baseURL}${clientesURL}`, newCliente);
      console.log("Cliente creado correctamente");
    } catch (error) {
      console.error("Error al crear Cliente:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  createPost();
};

const handleChange = (e) => {
  setClientesForm({ ...clientesForm, [e.target.name]: e.target.value });
  console.log(clientesForm);
  
};
    return ( 
      <Container className="radial-ellipse-side" bgcolor="star.png"> 
   

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
        p: 6,
        minWidth: 300,
        
      }}>
          <Grid container spacing={2}>
          <Grid item xs={8}>
              <Typography variant= "h4"sx={{   fontWeight: 700}}>Registrar Nuevo Cliente</Typography>
          
    <TextField
      label="Nombre"
      variant="outlined"
      
      sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
      InputLabelProps={{
        style: { color: "black" }, // Cambia el color del texto del label
      }}
      fullWidth
      name="nombre"
      value={clientesForm?.nombre}
          onChange={(e) => handleChange(e)}
    />
    <TextField
      label="Teléfono"
      variant="outlined"
      
      sx={{bgcolor:"white", borderRadius: 2, mt:"10px", }}
      InputLabelProps={{
        style: { color: "black"}, // Cambia el color del texto del label
      }}
      fullWidth
      name="telefono"
      value={clientesForm?.telefono}
          onChange={(e) => handleChange(e)}
    />
    <TextField
      label="Correo electrónico"
      variant="outlined"
      
      sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
      InputLabelProps={{
        style: { color: "black" }, // Cambia el color del texto del label
      }}
      fullWidth
      name="email"
      value={clientesForm?.email}
          onChange={(e) => handleChange(e)}
    />
  

  </Grid>
  <Grid item xs={4}>
      <Typography variant= "h5"sx={{ fontWeight: 700}}>Previsualización</Typography>
  <Card sx={{ maxWidth: 345, mt:"20px"}}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
          {clientesForm.nombre}
        </Typography>
        <Typography variant="body2" sx={{ color: '#9c27b0',  fontWeight: 500 }}>
          Teléfono:  {clientesForm.telefono}
        </Typography>
        <Typography variant="body2" sx={{ color: '#9c27b0',  fontWeight: 500 }}>
          Correo: {clientesForm.email}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>



  </Grid>
      </Grid>
      <Box
sx={{
  display: "flex",
  justifyContent: "center", // Centra horizontalmente
  gap: "10px", // Espaciado entre los botones
  mt: "30px", // Margen superior para separación
}}
>
      <Button variant="contained" sx={{ bgcolor:"#B996EF",height:50, }} onClick={handleSubmit}>Crear</Button>
      <Button variant="contained" color="black"sx={{bgcolor:"#FFFFFF",height:50, }} >Limpiar</Button>
      </Box>
      </Box>
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