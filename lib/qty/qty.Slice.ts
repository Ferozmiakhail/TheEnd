import { createSlice } from "@reduxjs/toolkit";

interface Quantity {
    quantity: number;
  }
  
  const initialState: Quantity = {
    quantity: 1, // Initial quantity value
  };

const QuantitySlice = createSlice({
    name: "Quantity",
    initialState,
    reducers: {
        incrementQuantity: (state) => {
            state.quantity += 1;
          },
          decrementQuantity: (state) => {
            if (state.quantity - 1 < 1) return;
            state.quantity -= 1;
          },
      },
  });
  
export const { decrementQuantity, incrementQuantity } = QuantitySlice.actions;
  
export default QuantitySlice.reducer;
