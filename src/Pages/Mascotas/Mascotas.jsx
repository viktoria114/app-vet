import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "../../services/theme.js";
import { ListaMascotas } from "../../Components/ListaMascotas/ListaMascotas.jsx";
import { useMascotas } from "../../hooks/useMascotas.jsx";

export const Mascotas = () => {
  const { loading, mascotas } = useMascotas();

  if (loading) {
    return <p>Cargando mascotas...</p>; // Mensaje mientras se cargan los datos
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BreadCrumbs firstpage={"Mascotas"}></BreadCrumbs>
        <ListaMascotas mascotas={mascotas}></ListaMascotas>
      </ThemeProvider>
    </>
  );
};
