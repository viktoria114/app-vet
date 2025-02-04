/* eslint-disable react-refresh/only-export-components */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Clientes } from "./Pages/Clients/Clientes";
import { Mascotas } from "./Pages/Mascotas/Mascotas";
import { Login } from "./Pages/Login/Login";
import { Inicio } from "./Pages/Home/Inicio";
import { ClientesDetalle } from "./Pages/Clients/ClientesDetalle";

export const baseURL = import.meta.env.VITE_BASE_URL;
export const clientesURL = import.meta.env.VITE_CLIENTES;
export const mascotasURL = import.meta.env.VITE_MASCOTAS;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route element={<NavBar />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/:id" element={<ClientesDetalle />} />
          <Route path="/mascotas" element={<Mascotas />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
