import { createSlice } from "@reduxjs/toolkit";
import { UserInfo as UserInfoType } from "types/pType";

interface pDashState {
  user: UserInfoType | null;
  userInfo: UserInfoType[];
}

const initialState: pDashState = {
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
    })
  }
});

export const { getUserInfo, user } = pDash.actions;
export default pDash.reducer;