/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export const FichaCliente = ({ cliente }) => {
  const navigate = useNavigate();
  const handleDetalle = () => {
    navigate("/clientes/" + cliente._id);
  };

  return (
    <Card sx={{ maxWidth: {sm:345, xs:"100%"}   }}>
      <CardActionArea onClick={handleDetalle}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            {cliente.nombre}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#9c27b0",
              fontWeight: 500,
            }}
          >
            Teléfono: {cliente.telefono}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#9c27b0",
              fontWeight: 500,
            }}
          >
            Correo: {cliente.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
