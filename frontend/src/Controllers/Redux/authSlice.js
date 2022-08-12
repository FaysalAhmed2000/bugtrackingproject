import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: "auth",
    initialState:{
        admin:false,
        LoggedIn:false,
    },
    reducers:{
        signIn: (state, actions) => {
            /* eslint-disable no-unused-vars */
            const {name, password} = actions.payload;
            /* eslint-enable no-unused-vars */
            state.LoggedIn = true;
            state.admin = true;
        },
        signOut: (state) => {
            state.LoggedIn = false;
            state.admin = false;

        },
        createUser:(state, actions) => {

        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;
