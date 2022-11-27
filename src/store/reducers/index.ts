import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import viewReducer from "./viewReducer";

export default combineReducers({
    searchReducer,
    viewReducer,
});