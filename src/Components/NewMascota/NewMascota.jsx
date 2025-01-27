import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import './style.css'
import { useEffect, useState } from "react";
import { baseURL, mascotasURL } from "../../App";
import axios from "axios";
import profile from '../../assets/profile.jpg'

export const NewMascota = () => {

    const [postImage, setPostImage] = useState({ myFile: "" });
  
    useEffect(() => {
        // Convertir la imagen predeterminada a base64 al montar el componente
        const convertDefaultImage = async () => {
          try {
            const response = await fetch(profile);
            const blob = await response.blob();
            const base64 = await convertToBase64(blob);
            setPostImage({ myFile: base64 }); // Guardar la imagen predeterminada en base64
          } catch (error) {
            console.error("Error al convertir la imagen predeterminada a base64:", error);
          }
        };
    
        convertDefaultImage();
      }, []);

    const createPost = async (newImage) => {
      const newMascota = {
        nombre: mascotasForm.nombre,
        especie: mascotasForm.especie,
        raza: mascotasForm.raza,
        edad: mascotasForm.edad,
        cliente_id: "67897c02413710d0ba88499b",
        myFile: newImage.myFile, // Incluye la imagen en Base64 aquí
      };
  
      try {
        await axios.post(`${baseURL}${mascotasURL}`, newMascota);
        console.log("Mascota creada correctamente");
      } catch (error) {
        console.error("Error al crear la mascota:", error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const imageToUpload = postImage.myFile;
    createPost({ myFile: imageToUpload });
    console.log("Imagen subida:", imageToUpload);
  };
  
    const handleUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setPostImage({ myFile: base64 }); // Asegúrate de usar la clave correcta
    };

// Estados iniciales
const [mascotasForm, setMascotasForm] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    pcliente_id: "67897c02413710d0ba88499b",
    myFile: postImage, 
  });

  const handleChange = (e) => {
    setMascotasForm({ ...mascotasForm, [e.target.name]: e.target.value });
    console.log(mascotasForm);
    
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
                <Typography variant= "h4"sx={{   fontWeight: 700}}>Registrar Nueva Mascota</Typography>
            
      <TextField
        label="Nombre"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
        name="nombre"
        value={mascotasForm?.nombre}
            onChange={(e) => handleChange(e)}
      />
      <TextField
        label="Especie"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px", }}
        InputLabelProps={{
          style: { color: "black"}, // Cambia el color del texto del label
        }}
        fullWidth
        name="especie"
        value={mascotasForm?.especie}
            onChange={(e) => handleChange(e)}
      />
      <TextField
        label="Raza"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
        name="raza"
        value={mascotasForm?.raza}
            onChange={(e) => handleChange(e)}
      />
      <TextField
       
       type="number"
        label="Edad"
        variant="outlined"
        
        sx={{bgcolor:"white", borderRadius: 2, mt:"10px"}}
        InputLabelProps={{
          style: { color: "black" }, // Cambia el color del texto del label
        }}
        fullWidth
        name="edad"
        value={mascotasForm?.edad}
            onChange={(e) => handleChange(e)}
      />
   
        


  <Button
  variant="contained"
  component="label"
  fullWidth color="black" sx={{mt: "10px", bgcolor:"white",boxShadow:0, height:50 }} >Subir Imágen
  <input
    type="file"
    hidden
    label="image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={handleUpload}
  />
</Button>

    </Grid>
    <Grid item xs={4}>
        <Typography variant= "h5"sx={{ fontWeight: 700}}>Previsualización</Typography>
    <Card sx={{ maxWidth: 345, mt:"20px"}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="200"
          src={postImage.myFile || profile}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
            {mascotasForm.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0',  fontWeight: 500 }}>
            Especie:  {mascotasForm.especie}
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0',  fontWeight: 500 }}>
            Raza: {mascotasForm.raza}
          </Typography>
          <Typography variant="body2" sx={{ color: '#9c27b0',   fontWeight: 500 }}>
            Edad: {mascotasForm.edad}
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

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  