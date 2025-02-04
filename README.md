# vet-app

Pet Care es una plataforma diseñada para ayudar a gestionar clientes y mascotas en una veterinaria, facilitando el seguimiento de sus registros y detalles de manera eficiente.

- Inicio de sesión
- Lista de mascotas y clientes
- Visualización rápida y sencilla
- Aplicación totalmente responsive y adaptable para celular
- Fácil contacto con correo y teléfono
- Respuesta rápida y eficiente


**Tecnologias utilizadas**

- FrontEnd:  React, React Router, Axios, Material-UI.
  

  **Cómo Instalar y Usar**
  
1. Clonar el repositorio: git clone https://github.com/viktoria114/app-vet.git

2. Instalar dependencias: npm install

3. Configurar variables de entorno: Crea un archivo .env en la raíz del backend con estas variables:
   
   VITE_BASE_URL = https://api-vet-six.vercel.app
VITE_CLIENTES = /clientes
VITE_MASCOTAS = /mascotas

4. Ejecutar el proyecto (local): npm run dev

http://app-vet.vercel.app (para usar desde vercel)

usuario: admin

contraseña: admin


**Estructura del Proyecto**

- app-vet/
- ├── public/
- ├── src/ 
- │ |── assets/
- │ ├── Components/
- │ ├── hooks/
- │ ├── pages/
- │ ├── services/
- │ ├── store/
- │ ├── App.jsx
- │ ├── main.jsx
- ├── .env #archivo oculto de las variables de entorno
- ├── .gitignore
- ├── eslint.config.js
- ├── index.html
- ├── package-lock.json
- ├── package.json
- ├── README.md
- ├── vite.config.js


**Próximos Pasos**
- Autenticación con Token
- Página para usuarios no administrativos
- Notificaciones
- Scroll Snap
- Modificación de mascotas
- Búsqueda por nombre
- Creación de citas medicas, vacunas, historial médico, etc.


**Créditos y despliegue**
Por: Arancio Oviedo María Victoria
GitHub: https://github.com/viktoria114
