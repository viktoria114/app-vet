/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import profile from "../../assets/profile.jpg";
import { useNewMascota } from "../../hooks/useNewMascota";
import { styleBox3 } from "../NewCliente/NewCliente";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

export const NewMascota = ({ id }) => {
  const {
    mascotasForm,
    handleChange,
    handleUpload,
    postImage,
    handleSubmit,
    loading,
  } = useNewMascota({ id });

  return (
    <Container className="radial-ellipse-side" bgcolor="star.png">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={styleBox3}>
        <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Registrar Nueva Mascota
            </Typography>

            <TextField
              label="Nombre*"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
              InputLabelProps={{
                style: { color: "black" }, // Cambia el color del texto del label
              }}
              fullWidth
              name="nombre"
              value={mascotasForm?.nombre}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Especie*"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
              InputLabelProps={{
                style: { color: "black" }, // Cambia el color del texto del label
              }}
              fullWidth
              name="especie"
              value={mascotasForm?.especie}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Raza"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
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
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
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
              fullWidth
              color="black"
              sx={{ mt: "10px", bgcolor: "white", boxShadow: 0, height: 50 }}
            >
              Subir Imágen
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
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Previsualización
            </Typography>
            <Card sx={{ maxWidth: 345, mt: 2, mx: "auto" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  src={postImage.myFile || profile}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {mascotasForm.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9c27b0", fontWeight: 500 }}
                  >
                    Especie: {mascotasForm.especie}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9c27b0", fontWeight: 500 }}
                  >
                    Raza: {mascotasForm.raza}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9c27b0", fontWeight: 500 }}
                  >
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
          <Button
            variant="contained"
            sx={{ bgcolor: "#B996EF", height: 50 }}
            onClick={handleSubmit}
            disabled={!mascotasForm.nombre || !mascotasForm.especie}
            loading={loading}
            loadingPosition="start"
            startIcon={<AddIcon />}
          >
            Crear
          </Button>
          <Button
            variant="contained"
            color="black"
            sx={{ bgcolor: "#FFFFFF", height: 50 }}
            loadingPosition="start"
            startIcon={<ClearIcon />}
          >
            Limpiar
          </Button>
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
};
