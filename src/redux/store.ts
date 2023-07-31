/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export const store = configureStore<any>({
    reducer  :{
        data : dataReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
