import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMascota } from "../store/slices/ClienteDetalleSlice/ClienteDetalleSlice.jsx"
import profile from "../assets/profile.jpg";

export const useNewMascota = ({ id }) => {
  const dispatch = useDispatch();
  const [postImage, setPostImage] = useState({ myFile: "" });
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const convertDefaultImage = async () => {
      try {
        const response = await fetch(profile);
        const blob = await response.blob();
        const base64 = await convertToBase64(blob);
        setPostImage({ myFile: base64 });
      } catch (error) {
        console.error("Error al convertir imagen:", error);
      }
    };

    convertDefaultImage();
  }, []);

  const [mascotasForm, setMascotasForm] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    myFile: postImage.myFile,
  });

  const handleChange = (e) => {
    setMascotasForm({ ...mascotasForm, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ myFile: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    await dispatch(createMascota({ id, mascotaData: { ...mascotasForm, myFile: postImage.myFile } }));
  
    setMascotasForm({
      nombre: "",
      especie: "",
      raza: "",
      edad: "",
      myFile: postImage.myFile,
    });
  
    setLoading(false);
  };

  const handleLimpiar = () => {
    setMascotasForm({
      nombre: "",
      especie: "",
      raza: "",
      edad: "",
      myFile:  postImage.myFile,
    });
  }
  
    return {mascotasForm, handleChange, handleUpload, postImage, handleSubmit, loading, handleLimpiar};
}


function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }