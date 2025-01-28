import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, clientesURL, mascotasURL } from "../App";

export const useClientesDetalle = ({ id }) => {
  const [mascotasDeCliente, setMascotasDeCliente] = useState([]);
  const [cantMascotas, setCantMascotas] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOneCliente = async () => {
    try {
      const response = await axios.get(`${baseURL}${clientesURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };

  const getMascotasdeCliente = async () => {
    try {
      const response = await axios.get(`${baseURL}${mascotasURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      console.log(`${baseURL}${mascotasURL}/${id}`);
      return []; // Devuelve un arreglo vacío si hay error
    }
  };

  useEffect(() => {
    const fetchMascotas = async () => {
      const data = await getMascotasdeCliente();
      setMascotasDeCliente(data);
      setLoading(false);
    };
    const fetchCliente = async () => {
      const data = await getOneCliente();
      setCliente(data);
      setLoading(false);
    };

    fetchCliente();
    fetchMascotas();
  }, []);

  useEffect(() => {
    const CantMascotas = async () => {
      if (mascotasDeCliente.length === 0) {
        setCantMascotas(0);
      } else {
        setCantMascotas(mascotasDeCliente.length);
      }
    };
    CantMascotas();
  }, [mascotasDeCliente]);

  return { mascotasDeCliente, cantMascotas, cliente, loading };
};
