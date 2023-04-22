import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as authReducer } from "./auth";
import { reducer as uiReducer } from "./ui";
import { reducer as modalsReducer } from "./modals";

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    modals: modalsReducer,
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["ui", "auth"],
};
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedRootReducer,
    devTools: import.meta.env.DEV,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
