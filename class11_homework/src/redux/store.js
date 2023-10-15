import { inventoryReducer } from "./reducer/inventoryReducer";
import { configureStore } from "@reduxjs/toolkit";

//* So thunk middleware
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const store = createStore(inventoryReducer, applyMiddleware(thunk));

const store = configureStore({ reducer: inventoryReducer });
export default store;