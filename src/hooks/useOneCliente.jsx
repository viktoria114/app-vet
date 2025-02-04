import axios from "axios";      
import { useEffect, useState } from "react";
import { baseURL, clientesURL } from "../App";

export const useOneCliente = (id) => {
  const [cliente, setCliente] = useState({}); // Cambia null por {}
  const [loading, setLoading] = useState(true);

  const getOneCliente = async () => {
    try {
      const response = await axios.get(`${baseURL}${clientesURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener cliente:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const clienteData = await getOneCliente();
      setCliente(clienteData)
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return { cliente, loading };
};
