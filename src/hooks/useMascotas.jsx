import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, mascotasURL } from "../App";

export const useMascotas = () => {
  const getMascotas = async () => {
    try {
      const response = await axios.get(`${baseURL}${mascotasURL}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };

  const [mascotas, setMascotas] = useState([]); // Estado para almacenar las mascotas
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga

  useEffect(() => {
    const fetchMascotas = async () => {
      const data = await getMascotas();
      setMascotas(data); // Guarda los datos en el estado
      setLoading(false); // Desactiva el indicador de carga
    };

    fetchMascotas(); // Llama a la función
  }, []);

  return { loading, mascotas };
};
