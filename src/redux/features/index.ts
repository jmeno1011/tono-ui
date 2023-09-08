import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";

const rootRuducer = combineReducers({
  auth: authReducer
})

export default rootRuducer;