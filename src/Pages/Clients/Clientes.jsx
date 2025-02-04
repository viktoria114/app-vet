import { Box, LinearProgress, useMediaQuery} from "@mui/material";
import { BreadCrumbs } from "../../Components/BreadCrumbs/BreadCrumbs.jsx";
import { NewCliente } from "../../Components/NewCliente/NewCliente.jsx";
import { ListaClientes } from "../../Components/ListaClientes/ListaClientes.jsx";
import { useClientes } from "../../hooks/useClientes.jsx";
import { useEffect, useState } from "react";
import { MidPagination } from "../../Components/MidPagination/MidPagination.jsx";


export const Clientes = () => {
const {loading, clientes} = useClientes()
const [paginaActual, setPaginaActual] = useState(1)
const isMobile = useMediaQuery("(max-width:600px)"); // Detecta si es XS
const [clientesPorPagina, setClientesPorPagina] = useState(isMobile ? 4 : 9); // Cambia según pantalla

// Efecto para actualizar cuando cambia el tamaño de pantalla
useEffect(() => {
  setClientesPorPagina(isMobile ? 4 : 9);
}, [isMobile]);

const indexUltimoCliente = paginaActual * clientesPorPagina
const indexPrimerCliente = indexUltimoCliente - clientesPorPagina
const clientesActuales = clientes.slice(indexPrimerCliente, indexUltimoCliente)

  if (loading) {
    return (
      <>
      <LinearProgress  color="secondary" value={loading} />
      </>
    )
  }

  return (
    <>
    <BreadCrumbs firstpage={"Clientes"}></BreadCrumbs>
    <ListaClientes clientes={clientesActuales}></ListaClientes>
    <MidPagination xPorPagina={clientesPorPagina} total={clientes.length} setPaginaActual={setPaginaActual}></MidPagination>
    <Box sx={{mt:10}}></Box>
    <NewCliente></NewCliente>
    </>
  );
};
