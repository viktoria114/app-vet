import { updateCliente } from "../store/slices/ClienteDetalleSlice/ClienteDetalleSlice"; 
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const useModalEditar = ({cliente, handleClose}) => {
    const dispatch = useDispatch();
    const [clientesForm, setClientesForm] = useState({
      nombre: "",
      telefono: "",
      email: "",
    });
  
    useEffect(() => {
      if (cliente) {
        setClientesForm({
          nombre: cliente.nombre,
          telefono: cliente.telefono,
          email: cliente.email,
        });
      }
    }, [cliente]);
  
    const handleChange = (e) => {
      setClientesForm({ ...clientesForm, [e.target.name]: e.target.value });
    };
  
    const handleEditar = () => {
      dispatch(updateCliente({ id: cliente._id, clienteData: clientesForm }));
      handleClose();
    };
  
    return {clientesForm, handleChange, handleEditar };
}