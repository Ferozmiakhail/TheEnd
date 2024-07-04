import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: boolean;
};
  
  const initialState: CounterState = {
    count: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
    togglecount: (state) => {
            state.count = !state.count;
          },
        
    },
  });
  
export const { togglecount } = counterSlice.actions;
  
//   export const { increment, decrement, incrementByAmount } = counterSlice.actions;
  
export default counterSlice.reducer;
