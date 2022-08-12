import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({name:"Faysal Ahmed"});
            state.push({name:"Lebron James"});
        }
    }
});

export default slice.reducer;
export const {getUser} = slice.actions;