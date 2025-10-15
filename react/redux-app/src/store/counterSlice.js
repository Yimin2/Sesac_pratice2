import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0, step: 1,
};
const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += state.step;
        },
        decrement: (state) => {
            state.count -= state.step;
        },
        setStep: (state, action) => {
            state.step = action.payload

        }
    }
})

export const {increment, decrement, setStep} = CounterSlice.actions;
export default CounterSlice.reducer;