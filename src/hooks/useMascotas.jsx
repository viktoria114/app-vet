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
    return (  );
}