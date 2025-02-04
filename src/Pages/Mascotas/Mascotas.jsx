import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import { ListaMascotas } from "../../Components/ListaMascotas/ListaMascotas.jsx";
import { MidPagination } from "../../Components/MidPagination/MidPagination.jsx";
import { useMascotas } from "../../hooks/useMascotas.jsx";
import { Box, LinearProgress, useMediaQuery } from "@mui/material";

export const Mascotas = () => {
  const { loading, mascotas } = useMascotas();
  const [paginaActual, setPaginaActual] = useState(1)
  const isMobile = useMediaQuery("(max-width:600px)"); // Detecta si es XS
  const [mascotasPorPagina, setMascotasPorPagina] = useState(isMobile ? 1 : 6); // Cambia según pantalla
  
  // Efecto para actualizar cuando cambia el tamaño de pantalla
  useEffect(() => {
    setMascotasPorPagina(isMobile ? 1 : 6);
  }, [isMobile]);
  
  const indexUltimaMascota = paginaActual * mascotasPorPagina
  const indexPrimeraMascota = indexUltimaMascota - mascotasPorPagina
  const mascotasActuales = mascotas.slice(indexPrimeraMascota, indexUltimaMascota)

  
 if (loading) {
    return (
      <>
      <LinearProgress color="secondary" value={loading} />
      </>
    )
  }
  return (
    <>
        <BreadCrumbs firstpage={"Mascotas"}></BreadCrumbs>
        <ListaMascotas mascotas={mascotasActuales}></ListaMascotas>
        <MidPagination xPorPagina={mascotasPorPagina} total={mascotas.length} setPaginaActual={setPaginaActual}></MidPagination>
        <Box sx={{mt:10}}></Box>
    </>
  );
};
