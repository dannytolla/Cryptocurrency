import { configureStore } from "@reduxjs/toolkit";
import { Cryptoapi } from "../services/Cryptoapi";
import { CryptoNewsApi } from "../services/CryptoNewsApi";

export default configureStore({
  reducer: {
    [Cryptoapi.reducerPath]: Cryptoapi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
  },
});
