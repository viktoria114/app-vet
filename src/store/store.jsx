import { configureStore } from "@reduxjs/toolkit";
import clientes from "./slices/ClienteSlice/ClienteSlice.jsx"
import clienteDetalle from "./slices/ClienteDetalleSlice/ClienteDetalleSlice.jsx"

const store = configureStore({
  reducer: {
    clientes: clientes,
    clienteDetalle: clienteDetalle, 
  },
});

export default store;
