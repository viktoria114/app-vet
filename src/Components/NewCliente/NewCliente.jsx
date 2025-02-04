import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useNewCliente } from "../../hooks/useNewCliente";

// eslint-disable-next-line react-refresh/only-export-components
export const styleBox3 = {
  bgcolor: "rgba(255, 255, 255, 0,5)",
  boxShadow: 1,
  borderRadius: 2,
  p: { xs: 3, sm: 6 },
  minWidth: 300,
}

export const NewCliente = () => {
  const {clientesForm, handleChange, handleSubmit, loading, handleLimpiar} = useNewCliente()


  return (
    <Container className="radial-ellipse-side" bgcolor="star.png">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box
        sx={styleBox3}
      >
         <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
         <Grid item xs={12} sm={8}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Registrar Nuevo Cliente
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
              value={clientesForm?.nombre}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Teléfono*"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
              InputLabelProps={{
                style: { color: "black" }, // Cambia el color del texto del label
              }}
              fullWidth
              name="telefono"
              value={clientesForm?.telefono}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Correo electrónico*"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 2, mt: "10px" }}
              InputLabelProps={{
                style: { color: "black" }, // Cambia el color del texto del label
              }}
              fullWidth
              name="email"
              value={clientesForm?.email}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Previsualización
            </Typography>
            <Card sx={{ maxWidth: 345, mt: 2, mx: "auto" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {clientesForm.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9c27b0", fontWeight: 500 }}
                  >
                    Teléfono: {clientesForm.telefono}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9c27b0", fontWeight: 500 }}
                  >
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
          <Button
            variant="contained"
            sx={{ bgcolor: "#B996EF", height: 50 }}
            onClick={handleSubmit}
            disabled={
              !clientesForm.nombre ||
              !clientesForm.telefono ||
              !clientesForm.email
            }
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
            onClick={handleLimpiar}
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
