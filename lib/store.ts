import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from './counter/counter.slice';
import counterReducer from './counter/counter.Slice';
import QuantityReducer from './qty/qty.Slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer,
        Quantity: QuantityReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
