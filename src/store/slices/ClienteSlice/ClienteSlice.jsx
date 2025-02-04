import { createSlice } from "@reduxjs/toolkit";

const ClienteSlice = createSlice({
  name: "clientes",
  initialState: {
    clientes: [],
  },
  reducers: {
    setClientes: (state, action) => {
      state.clientes = action.payload;
    },
  },
});

export const { setClientes } = ClienteSlice.actions;
export default ClienteSlice.reducer;
