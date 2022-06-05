// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {injectReducer,store} from '../../entry-point/store'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement
    // reset
  },
});
injectReducer("counter", counterSlice.reducer)
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
