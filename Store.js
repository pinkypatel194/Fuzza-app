import { configureStore } from "@reduxjs/toolkit";
import datasliceReducer from "./dataslice";

const Store = configureStore({
   reducer: {
      data: datasliceReducer
   }
});

export default Store;