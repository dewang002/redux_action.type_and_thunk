import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk'
import todoReducer from "./slice/TodoSlice"

const rootReducer = combineReducers({
    todo:todoReducer
})

export const store =configureStore({
     reducer:rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
    })