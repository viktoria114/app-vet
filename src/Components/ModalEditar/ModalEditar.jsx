/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useModalEditar } from "../../hooks/useModalEditar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {sm:900, xs:"100%"},
  height:{xs:"100%", sm:"auto"},
  bgcolor: "background.paper",
  border: "2px solid #B996EF",
  p: {sm:5, sx:1},
  boxShadow: 1,
  borderRadius: 2,
};

export const ModalEditar = ({ open, handleClose, cliente }) => {
 
  const {clientesForm, handleChange, handleEditar} = useModalEditar({cliente, handleClose})
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Container className="radial-ellipse-side" bgcolor="star.png">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Editar Cliente
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
              <Card sx={{ maxWidth: 345, mt: "20px" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {clientesForm?.nombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#9c27b0", fontWeight: 500 }}
                    >
                      Teléfono: {clientesForm?.telefono}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#9c27b0", fontWeight: 500 }}
                    >
                      Correo: {clientesForm?.email}
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
              onClick={handleEditar}
              disabled={
                !clientesForm.nombre ||
                !clientesForm.telefono ||
                !clientesForm.email
              }
              loadingPosition="start"
              startIcon={<EditIcon />}
            >
              Confirmar
            </Button>
            <Button
              variant="contained"
              color="black"
              sx={{ bgcolor: "#FFFFFF", height: 50 }}
              onClick={handleClose}
            >
              Descartar
            </Button>
          </Box>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Box>
    </Modal>
  );
};
