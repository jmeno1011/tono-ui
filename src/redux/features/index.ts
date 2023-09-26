import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import pDashReducer from "./pDashboard";

const rootRuducer = combineReducers({
  auth: authReducer,
  pDash: pDashReducer
})

export default rootRuducer;