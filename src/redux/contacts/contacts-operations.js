import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.baseURL = "https://619a428d9022ea0017a7b0bb.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/contacts");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const data = await axios.post("/contacts", contact);
    return data.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const data = await axios.delete(`/contacts/${id}`);
    return id;
  }
);

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());

//   try {
//     const data = await axios.get("/contacts");
//     dispatch(fetchContactsSuccess(data.data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// const data = axios
//   .get("/contacts")
//   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   .catch((error) => dispatch(fetchContactsError(error)));
// };

// export const addContact = (contact) => async (dispatch) => {
//   dispatch(addContactsRequest());

//   try {
//     const data = await axios.post("/contacts", contact);
//     dispatch(addContactsSuccess(data.data));
//   } catch (error) {
//     dispatch(addContactsError(error));
//   }

// axios
//   .post("/contacts", contact)
//   .then(({ data }) => dispatch(addContactsSuccess(data)))
//   .catch((error) => dispatch(addContactsError(error)));
// };

// export const deleteContact = (contactId) => async (dispatch) => {
//   dispatch(deleteContactsRequest());
//   try {
//     const data = await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactsSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactsError(error));
//   }

// axios
//   .delete(`/contacts/${contactId}`)
//   .then(() => dispatch(deleteContactsSuccess(contactId)))
//   .catch((error) => dispatch(deleteContactsError(error)));
// };

// export default {
//   fetchContacts,
//   addContact,
//   deleteContact,
// };
