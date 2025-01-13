import { useState } from 'react'
import profile from './assets/profile.jpg'
import './App.css'
import axios from 'axios'

const url = "http://localhost:3000/mascotas"

function App() {
  const [postImage, setPostImage] = useState({ myFile: "" });

  const createPost = async (newImage) => {
    const mascotaEjemplo = {
      nombre: "Tanjiro",
      especie: "Gato",
      raza: "negro",
      edad: 4,
      cliente_id: "6780798221ece426bb41f13d",
      myFile: newImage.myFile, // Incluye la imagen en Base64 aquí
    };

    try {
      await axios.post(url, mascotaEjemplo);
      console.log("Mascota creada correctamente");
    } catch (error) {
      console.error("Error al crear la mascota:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
    console.log("Imagen subida:", postImage);
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ myFile: base64 }); // Asegúrate de usar la clave correcta
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload">
          <img src={postImage.myFile || profile} alt="" />
        </label>
        <br />
        <input
          type="file"
          label="image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={handleUpload}
        />
        <h3>Subir imagen</h3>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default App;

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
