import {configureStore} from "@reduxjs/toolkit";
import appReducer from "../feature/appSlice";


export const Store=()=>{configureStore({

    reducer:{
        app:appReducer,
    },
});
}