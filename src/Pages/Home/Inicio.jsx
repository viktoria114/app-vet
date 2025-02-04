import { Box, Container, Typography } from "@mui/material";
import ParallaxImage from "../../Components/ParallaxImage/ParallaxImage";
import "./style.css";
import { CardInicio } from "../../Components/CardInicio/CardInicio";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router-dom";
import { useClientes } from "../../hooks/useClientes";
import { useMascotas } from "../../hooks/useMascotas";

export const Inicio = () => {
  const navigate = useNavigate();
  const handleCliente = () => {
    navigate("/clientes");
  };

  const handleMascota = () => {
    navigate("/mascotas");
  };

  const { clientes } = useClientes();
  const { mascotas } = useMascotas();

  return (
    <>
      <div className="background">
        <ParallaxImage></ParallaxImage>

        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Columna en móvil, fila en pantallas grandes
            alignItems: "center", // Centra las cards en modo columna
            justifyContent: "center", // Asegura que estén centradas
            width: "100%", // Ocupa todo el ancho disponible
            gap: 8,
            mt: 10,
          }}
        >
          <CardInicio
            title={"Clientes"}
            icon={<PersonIcon fontSize="large" sx={{ color: "#9C27B0" }} />}
            list={["Adopción", "Detalles y modificación"]}
            onClick={handleCliente}
          ></CardInicio>

          <CardInicio
            title={"Mascotas"}
            icon={<PetsIcon fontSize="large" sx={{ color: "#9C27B0" }} />}
            list={["Detalles", "Fotografias"]}
            onClick={handleMascota}
          ></CardInicio>
        </Container>

        <div style={{ backgroundColor: "#9C27B0" }}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              mb: 15,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ textAlign: "center", mt: 5, mb: 5 }}>
              <Typography variant="h1" color="white" sx={{ fontWeight: 800 }}>
                {clientes.length}
              </Typography>
              <Typography color="white">Cantidad de Clientes</Typography>
            </Box>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Typography variant="h1" color="white" sx={{ fontWeight: 800 }}>
                {mascotas.length}
              </Typography>
              <Typography color="white">Cantidad de Mascotas</Typography>
            </Box>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Typography variant="h1" color="white" sx={{ fontWeight: 800 }}>
                {" "}
                {(mascotas.length / clientes.length).toFixed(2)}
              </Typography>
              <Typography color="white">Mascotas Promedio</Typography>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};
