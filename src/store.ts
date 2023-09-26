import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import rootRuducer from "redux/features"
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth', 'pDash']
}

const persistedReducer = persistReducer(persistConfig, rootRuducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger]
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;