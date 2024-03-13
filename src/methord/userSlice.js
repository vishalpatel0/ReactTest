import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [{ id: 1, name: "vishal" }],
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      // const user = {
      //   id: nanoid(),
      //   name: action.payload.name,
      // };
      // state.users.push(user);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => {
        user.id !== action.payload.id;
      });
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
