/* eslint-disable react/prop-types */
import { Box, Button, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalBorrar } from "../../hooks/useModalBorrar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, xs: "100%" },
  height: { xs: "100%", sm: "auto" },
  bgcolor: "background.paper",
  border: "2px solid #B996EF",
  p: 5,
  boxShadow: 1,
  borderRadius: 2,
  minWidth: 300,

  ml:{sx: "15px"},
  mt: {sx: "30px"},
};

export const ModalBorrar = ({ open, handleClose, cliente, cantMascotas }) => {
  const { handleBorrar, loading } = useModalBorrar({ cliente });
  
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          ¿Está seguro de eliminar el siguiente cliente y todas las mascotas
          asociadas?
        </Typography>
        <Typography sx={{ mt: 2 }}>- Nombre: {cliente.nombre}</Typography>
        <Typography sx={{ mt: 2 }}>- Teléfono: {cliente.telefono}</Typography>
        <Typography sx={{ mt: 2 }}>- Correo: {cliente.email}</Typography>
        <Typography sx={{ mt: 2 }}>
          - Cantidad de Mascotas: {cantMascotas}
        </Typography>

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
              Si
            </Button>
            <Button
              variant="contained"
              color="black"
              sx={{ bgcolor: "#FFFFFF", height: 50 }}
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
