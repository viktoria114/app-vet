import { Box} from "@mui/material";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import theme from '../../services/theme.js'
import { ThemeProvider } from "@emotion/react";
import { NewCliente } from "../../Components/NewCliente/NewCliente.jsx";
import { ListaClientes } from "../../Components/ListaClientes/ListaClientes.jsx";
import { useClientes } from "../../hooks/useClientes.jsx";


export const Clientes = () => {
const {loading, clientes} = useClientes()

  if (loading) {
    return <p>Cargando clientes...</p>; // Mensaje mientras se cargan los datos
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <BreadCrumbs firstpage={"Clientes"}></BreadCrumbs>
    <ListaClientes clientes={clientes}></ListaClientes>
    <Box sx={{mt:10}}></Box>
    <NewCliente></NewCliente>
    </ThemeProvider>
    </>
  );
};
