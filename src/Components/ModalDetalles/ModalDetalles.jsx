/* eslint-disable react/prop-types */
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalDetalles } from "../../hooks/useModalDetalles.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {sm:900, xs:"100%"},
  height:{xs:"100%", sm:"auto"},
  bgcolor: "background.paper",
  border: "2px solid #B996EF",
  p: 3,
  boxShadow: 1,
  borderRadius: 2,
};

export const ModalDetalles = ({ open, handleClose, mascota }) => {
  const { cliente, loading, handleBorrar } = useModalDetalles({
    handleClose,
    mascota,
  });
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mt:{xs:5,sm:0} }}>
              Detalles de la Mascota
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
                component="img"
                src={mascota.myFile}
                alt="Imagen de la mascota"
                sx={{
                  width: { xs: "80%", sm: 400 }, // En xs ocupa todo el ancho
                  maxHeight: { xs: 400, sm: 600 }, // Ajusta la altura en xs
                  border: "5px solid #555",
                  borderRadius: 2,
                  ml:3
                }}
              />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ml:{sm:0,xs:7}}}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
              ● Nombre: {mascota.nombre}
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
              ● Especie: {mascota.especie}
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
              ● Raza: {mascota.raza || "-"}
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
              ● Edad: {mascota.edad || "-"}
            </Typography>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500 }}>
              ● Dueño: {cliente.nombre || "Cargando..."}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              onClick={handleBorrar}
              loading={loading}
              loadingPosition="start"
              startIcon={<DeleteIcon />}
            >
              Borrar
            </Button>
            <Button
              variant="contained"
              color="black"
              sx={{ bgcolor: "#FFFFFF", height: 50 }}
              onClick={handleClose}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
