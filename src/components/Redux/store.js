import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from 'components/Redux/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contact',
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, contactReducer);

const reducer = {
  contact: persistedReducer,
};

export const store = configureStore(
  { reducer },
  {
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  }
);

export const persistor = persistStore(store);

// Варіант з використанням combineReducers()!
// Також є варіант з використанням black_list and white_list, ці два методи допомагають контролювати те, що потрібно передати  в local-sorage!

// const reducer = combineReducers({
//   contact: contactReducer,
// });

// const persistConfig = {
//   key: 'contact',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({ reducer: persistedReducer });
// export const persistor = persistStore(store);
