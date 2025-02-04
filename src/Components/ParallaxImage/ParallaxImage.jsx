import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function ParallaxImage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.5); // Ajusta la velocidad aquí
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#90906A",
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Box
        component="img"
        src="puppyinicio.jpg"
        alt="Imagen de fondo"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translate(-50%, ${offsetY}px)`,
          width: {xl:"100%"},
          transition: "transform 0.1s linear",
          filter: "opacity(80%)"
        }}
      />
<Typography  
  color="white" 
  sx={{
    textAlign: "center",
    width: "100%",
    filter: "opacity(100%)",
    typography: { xs: "h2", sm: "h1" }, // Variante responsiva
    fontWeight: { xs: 400, sm: 900 }
  }}
>
  P E T - C A R E
</Typography>
<Typography color= "white" sx={{
    textAlign: "center", // Centra el texto horizontalmente
    filter: "opacity(100%)",
    width: "100%", // Asegura que ocupe todo el ancho disponible
    typography: { xs: "h4", sm: "h2" },
    fontWeight: { xs: 400, sm: 700 },
  }}>La mejor gestión veterinaria</Typography>
    </Box>
    
  );
}