import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IPayload = {
    name: string,
    value: string
}

const data = {
    lookingFor: "a man looking for a woman",
    age: "",
    location: "",
    username: "",
    password: "",
}

const userDataSlice = createSlice({
    name: "userData",
    initialState: data,
    reducers: {
        setUserData(state, action: PayloadAction<IPayload>) {
            const { name, value } = action.payload
            return state = { ...state, [name]: value }
        }
    }

});

export const userDataAction = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;