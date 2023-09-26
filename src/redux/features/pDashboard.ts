import { createSlice } from "@reduxjs/toolkit";
import { UserInfo as UserInfoType } from "types/pType";

interface pDashState {
  userCode: string;
  user: UserInfoType | null;
  userInfo: UserInfoType[];
}

const initialState: pDashState = {
  userCode: '',
  user: null,
  userInfo: [],
  
};

export const pDash = createSlice({
  name: 'pDash',
  initialState,
  reducers: {
    getUserInfo: (state, action) => ({
      ...state,
      userInfo: action.payload
    }),
    user: (state, action) =>({
      ...state,
      user: {
        ...action.payload
      }
    }),
    userCode: (state, action) =>({
      ...state,
      userCode : action.payload
    })
  }
});

export const { getUserInfo, user, userCode } = pDash.actions;
export default pDash.reducer;