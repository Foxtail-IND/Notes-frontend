import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// ✅ Make sure to EXPORT persistor
export const persistor = persistStore(store);

// ✅ Also ensure you export store properly
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
