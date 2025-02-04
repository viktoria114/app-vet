import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { baseURL, clientesURL } from "../App";
import { setClientes } from "../store/slices/ClienteSlice/ClienteSlice";

export const useNewCliente = () => {
    
  const dispatch = useDispatch();

  const [clientesForm, setClientesForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const createPost = async () => {
    const newCliente = {
      nombre: clientesForm.nombre,
      telefono: clientesForm.telefono,
      email: clientesForm.email,
    };

    try {
      const response = await axios.post(`${baseURL}${clientesURL}`, newCliente);
      console.log("Cliente creado correctamente", response.data);

      // Actualizar la lista de clientes en Redux
      const resClientes = await axios.get(`${baseURL}${clientesURL}`);
      dispatch(setClientes(resClientes.data));

    } catch (error) {
      console.error("Error al crear Cliente:", error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await createPost();
    setClientesForm({
      nombre: "",
      telefono: "",
      email: "",
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    setClientesForm({ ...clientesForm, [e.target.name]: e.target.value });
  };

  const handleLimpiar = () => {
    setClientesForm({
      nombre: "",
      telefono: "",
      email: "",
    });
  };
    return {clientesForm, handleChange, handleSubmit, loading, handleLimpiar, setClientesForm};
}