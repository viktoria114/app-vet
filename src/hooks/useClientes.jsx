import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, clientesURL } from "../App";

export const useClientes = () => {
  const getClientes = async () => {
    try {
      const response = await axios.get(`${baseURL}${clientesURL}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };
  
  const [clientes, setClientes] = useState([]); // Estado para almacenar los clientes
    const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  
    useEffect(() => {
      const fetchClientes = async () => {
        const data = await getClientes();
        setClientes(data); // Guarda los datos en el estado
        console.log(data);
        
        setLoading(false); // Desactiva el indicador de carga
      };
  
      fetchClientes(); // Llama a la función
    }, []);
  
  
  return { loading, clientes} ;
}