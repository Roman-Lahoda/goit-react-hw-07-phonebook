import {
  configureStore,
  getDefaultMiddleware,
  createReducer,
} from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts/contacts-operations";

const loadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: (_, { payload }) => {
    console.log("payload :", payload.message);
    return false;
  },
});

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("my middleware");

//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    loading: loadingReducer,
  },
  devtools: true,
  middleware,
  // devtools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

export default store;
