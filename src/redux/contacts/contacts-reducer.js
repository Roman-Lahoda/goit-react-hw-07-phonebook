import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload.reverse(),
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filtersReducer = createReducer("", {
  [actions.changeFilters]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filtersReducer,
});
