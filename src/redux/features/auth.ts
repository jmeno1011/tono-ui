import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
  loggedIn: LoggedIn,
  user: UserNames
}

interface LoggedIn {
  p: boolean;
  c: boolean;
  b: boolean;
}

interface UserNames {
  p: string | undefined | null;
  c: string | undefined | null;
  b: string | undefined | null;
}

const initialState: AuthState = {
  loggedIn: {
    p: false,
    c: false,
    b: false
  },
  user: {
    p: null,
    c: null,
    b: null
  }
}

interface Payload {
  div: string;
  user: string;
}

function dev(logged: LoggedIn, d: string, action: string) {
  switch (d) {
    case 'p':
      return ({
        ...logged,
        p: action === 'login' ? true : false,
      });
    case 'c':
      return ({
        ...logged,
        c: action === 'login' ? true : false,
      })
    case 'b':
      return ({
        ...logged,
        b: action === 'login' ? true : false,
      })
    default:
      return ({
        ...logged
      })
  }
}

function user(userNames: UserNames, d: string, userName: string, action: string) {
  switch (d) {
    case 'p':
      return ({
        ...userNames,
        p: action === 'login' ? userName : null,
      });
    case 'c':
      return ({
        ...userNames,
        c: action === 'login' ? userName : null,
      })
    case 'b':
      return ({
        ...userNames,
        b: action === 'login' ? userName : null,
      })
    default:
      return ({
        ...userNames
      })
  }
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Payload>) => ({
      loggedIn: dev(state.loggedIn, action.payload.div, 'login'),
      user: user(state.user, action.payload.div, action.payload.user, 'login')
    }),
    logout: (state, action: PayloadAction<Payload>) => ({
      loggedIn: dev(state.loggedIn, action.payload.div, 'logout'),
      user: user(state.user, action.payload.div, action.payload.user, 'logout')
    })
  }
})

export const { login, logout } = auth.actions;
export default auth.reducer;