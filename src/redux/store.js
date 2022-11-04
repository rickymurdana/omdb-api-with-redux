import { configureStore } from "@reduxjs/toolkit";
import { favMovieReducer, movieReducer } from "./reducers/reducers";

const store = configureStore({
    reducer: {
        allMovie: movieReducer,
        favMovie: favMovieReducer
    }
})

export default store;
