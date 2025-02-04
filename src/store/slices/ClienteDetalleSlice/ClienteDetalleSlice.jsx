import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, clientesURL, mascotasURL } from "../../../App"; 

export const fetchClienteDetalle = createAsyncThunk(
  "clienteDetalle/fetchClienteDetalle",
  async (id) => {
    const response = await axios.get(`${baseURL}${clientesURL}/${id}`);
    return response.data;
  }
);

export const fetchMascotasDeCliente = createAsyncThunk(
  "clienteDetalle/fetchMascotasDeCliente",
  async (id) => {
    const response = await axios.get(`${baseURL}${mascotasURL}/${id}`);
    return response.data;
  }
);

export const deleteMascota = createAsyncThunk(
    "clienteDetalle/deleteMascota",
    async (id, { rejectWithValue }) => {
      try {
        await axios.delete(`${baseURL}${mascotasURL}/${id}`);
        return id; // Retorna el ID de la mascota eliminada
      } catch (error) {
        console.error("Error al eliminar la mascota:", error);
        return rejectWithValue(error.response?.data || "Error desconocido");
      }
    }
  );

  export const createMascota = createAsyncThunk(
    "clienteDetalle/createMascota",
    async ({ id, mascotaData }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${baseURL}${mascotasURL}`, {
          ...mascotaData,
          cliente_id: id,
        });
        return response.data;
      } catch (error) {
        console.error("Error al crear la mascota:", error);
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const updateCliente = createAsyncThunk(
    "clienteDetalle/updateCliente",
    async ({ id, clienteData }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`${baseURL}${clientesURL}/${id}`, clienteData);
        return response.data;
      } catch (error) {
        console.error("Error al actualizar el cliente:", error);
        return rejectWithValue(error.response.data);
      }
    }
  );

const ClienteDetalleSlice = createSlice({
    name: "clienteDetalle",
    initialState: {
      cliente: null,
      mascotasDeCliente: [],
      cantMascotas: 0,
      loading: false,
    },
    reducers: {
      clearClienteDetalle: (state) => {
        state.cliente = null;
        state.mascotasDeCliente = [];
        state.cantMascotas = 0;
        state.loading = false;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchClienteDetalle.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchClienteDetalle.fulfilled, (state, action) => {
          state.cliente = action.payload;
          state.loading = false;
        })
        .addCase(updateCliente.fulfilled, (state, action) => {
            state.cliente = action.payload;
          })
        .addCase(fetchMascotasDeCliente.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchMascotasDeCliente.fulfilled, (state, action) => {
          state.mascotasDeCliente = action.payload;
          state.cantMascotas = action.payload.length || 0;
          state.loading = false;
        })
        .addCase(createMascota.fulfilled, (state, action) => {
            state.mascotasDeCliente.push(action.payload);
            state.cantMascotas += 1;
          })
        .addCase(deleteMascota.fulfilled, (state, action) => {
            state.mascotasDeCliente = state.mascotasDeCliente.filter(
              mascota => mascota._id !== action.payload
            );
            state.cantMascotas = state.mascotasDeCliente.length;
          });
    },
  });
  
  export const { clearClienteDetalle } = ClienteDetalleSlice.actions;
  export default ClienteDetalleSlice.reducer;