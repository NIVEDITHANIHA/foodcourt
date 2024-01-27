import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ResturanntApi = createAsyncThunk('ResturantFoods/ResturanntApi', () => {
    const results = axios.get('/restaurant.json').then((response) =>

        response.data
    )
    console.log(results);
    return results
})



const resturantslice = createSlice({
    name: "ResturantFoods",
    initialState: {
        loading: false,
        resturantArray: [],
        searchArray: [],
        error: ""
    },



    extraReducers: (builder) => {
        builder.addCase(ResturanntApi.pending, (state) => {
            state.loading = true

        })
        builder.addCase(ResturanntApi.fulfilled, (state, action) => {
            state.loading = false;
            state.resturantArray = action.payload
            state.searchArray = action.payload
            state.error = ""

        })
        builder.addCase(ResturanntApi.rejected, (state, action) => {
            state.loading = false;
            state.resturantArray = ""
            state.searchArray = ""
            state.error = action.error.message
        })

    }
    ,

    reducers: {
        searchNeighbour: (state, action) => {

            state.resturantArray.restaurants = state.searchArray.restaurants.filter((item) => {
                return item.neighborhood.toLowerCase().includes(action.payload.toLowerCase());
            });
            console.log(state.resturantArray.restaurants);

            // const filteredArray = []

            // for (let i = 1; i < state.searchArray.restaurants.length; i++) {
            //     console.log(state.searchArray.restaurants[i].neighborhood.toLowerCase());
            //     console.log(action.payload.toLowerCase());
            //     console.log(state.searchArray.restaurants[i].neighborhood.toLowerCase() == action.payload.toLowerCase());
            //     if (state.searchArray.restaurants[i].neighborhood.toLowerCase() === action.payload.toLowerCase()) {

            //         filteredArray.push(state.searchArray.restaurants[i])
            //     };

            // }
            // console.log(filteredArray);
            // state.resturantArray.restaurants = filteredArray


        }
    }



})
export const { searchNeighbour } = resturantslice.actions
export default resturantslice.reducer