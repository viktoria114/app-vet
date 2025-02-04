import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, clientesURL } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setClientes } from "../store/slices/ClienteSlice/ClienteSlice";

export const useClientes = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Estado de carga
  const clientes = useSelector((state) => state.clientes.clientes);

  useEffect(() => {
    const getClientes = async () => {
      try {
        const response = await axios.get(`${baseURL}${clientesURL}`);
        dispatch(setClientes(response.data)); // Corrección en el despacho de la acción
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      } finally {
        setLoading(false); // Asegura que loading cambie a false, incluso si hay error
      }
    };

    getClientes();
  }, [dispatch]); // Se incluye dispatch en las dependencias

  return { loading, clientes }; // Se sigue exportando clientes para su uso en otros componentes
};
