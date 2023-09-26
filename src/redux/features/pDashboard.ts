import { createSlice } from "@reduxjs/toolkit";
import { PSurveyResult, PUserInfo } from "types/pType";

interface pDashState {
  userCode: string;
  user: PUserInfo | null;
  userList: PUserInfo[];
  surveyResult: PSurveyResult[];
}

const initialState: pDashState = {
  userCode: '',
  user: null,
  userList: [],
  surveyResult: []
};

export const pDash = createSlice({
  name: 'pDash',
  initialState,
  reducers: {
    userCodeAction: (state, action) =>({
      ...state,
      userCode : action.payload
    }),
    userAction: (state, action) =>({
      ...state,
      user: {
        ...action.payload
      }
    }),
    userListAction: (state, action)=>({
      ...state,
      userList: action.payload
    }),
    surveyResultAction: (state, action) => ({
      ...state,
      surveyResult: action.payload
    }),
  }
});

export const { userCodeAction, userAction, userListAction, surveyResultAction } = pDash.actions;
export default pDash.reducer;