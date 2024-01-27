import { configureStore } from "@reduxjs/toolkit";
import resturantslice from "./resturantslice";





const store = configureStore({
    reducer: {
     resturantslice: resturantslice
    }

})

export default store