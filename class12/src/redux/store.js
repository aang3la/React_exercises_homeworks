import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducers/CakeReducer";
import { CommentsReducer } from "./reducers/CommentsReducer";

// Na ovoj nacin se kombiniraat poveke reduceri vo eden store
const reducers = { CakeReducer, CommentsReducer }

export const store = configureStore({ reducer: reducers });
