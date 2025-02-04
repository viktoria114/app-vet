import axios from "axios";
import { useState } from "react";
import { baseURL, clientesURL } from "../App.jsx"
import { useNavigate } from "react-router-dom";

export const useModalBorrar = ({cliente}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const borrarCliente = async () => {
      setLoading(true)
      try {
        const response = await axios.delete(
          `${baseURL}${clientesURL}/${cliente._id}`
        );
        setLoading(false)
        return response.data;
      } catch (error) {
        console.error(error);
        return []; // Devuelve un arreglo vacío si hay error
      }
    };
  
    const handleBorrar = () => {
      borrarCliente();
      navigate("/clientes");
    };
    return {handleBorrar, loading};
}