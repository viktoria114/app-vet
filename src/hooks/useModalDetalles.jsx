import { useOneCliente } from "./useOneCliente.jsx"
import { useDispatch } from "react-redux";
import { deleteMascota } from "../store/slices/ClienteDetalleSlice/ClienteDetalleSlice.jsx";
import { useState } from "react";

export const useModalDetalles = ({handleClose, mascota}) => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
  
  const handleBorrar = () => {
    setLoading(true)
    dispatch(deleteMascota(mascota._id))
      .unwrap()
      .then(() => {
        setLoading(false)
        handleClose(); // Cierra el modal después de eliminar
      })
      .catch((error) => {
        console.error("Error al borrar la mascota:", error);
      });
  };
  
    const idcliente = mascota.cliente_id
    console.log(idcliente);
    
    const { cliente } =  useOneCliente(mascota.cliente_id);
   
    console.log(cliente);
    return { cliente, loading, handleBorrar};
}