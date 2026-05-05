import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '0',
};

const calculate = (expression) => {
  try {
    return eval(expression).toString();
  } catch {
    return 'Error';
  }
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    input: (state, action) => {
      if (state.value === '0') {
        state.value = action.payload;
      } else {
        state.value += action.payload;
      }
    },
    clear: (state) => {
      state.value = '0';
    },
    deleteLast: (state) => {
      state.value = state.value.slice(0, -1) || '0';
    },
    evaluate: (state) => {
      state.value = calculate(state.value);
    },
  },
});

export const { input, clear, deleteLast, evaluate } = calculatorSlice.actions;
export default calculatorSlice.reducer;