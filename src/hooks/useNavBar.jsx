import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavBar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
  
    const toggleDrawer = () => () => {
      if (open == true) setOpen(false);
      if (open == false) setOpen(true);
    };
  
    const menuItems = [
      { text: "Inicio", path: "/inicio" },
      { text: "Clientes", path: "/clientes" },
      { text: "Mascotas", path: "/mascotas" },
      { text: "Cerrar Sesión", path: "/" },
    ];
  
    // Mapeamos las rutas a los valores de las Tabs
    const tabMapping = {
      "/inicio": "one",
      "/clientes": "two",
      "/mascotas": "three",
    };
  
    // Determina la pestaña actual, considerando rutas dinámicas
    const currentTab = location.pathname.startsWith("/clientes")
      ? "two" // Selecciona "Clientes" si la ruta comienza con "/clientes"
      : tabMapping[location.pathname] || "one";
  
    // Maneja el cambio de pestañas
    const handleChange = (event, newValue) => {
      const route = Object.keys(tabMapping).find(
        (key) => tabMapping[key] === newValue
      );
      if (route) {
        navigate(route);
      }
    };
  
    const handleSesión = () => {
      navigate("/");
    };
  
    return {toggleDrawer, menuItems, currentTab, handleChange, handleSesión, navigate, open};
}