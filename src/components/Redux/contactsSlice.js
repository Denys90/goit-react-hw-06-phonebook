import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
  filter: '',
};

const ContactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contact.push(payload);
      },
      prepare(data) {
        const newContact = {
          ...data,

          completed: false,
          id: nanoid(),
        };
        return { payload: newContact };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(element => element.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const contactReducer = ContactsSlice.reducer;
export const { addContact, deleteContact, filterContacts } =
  ContactsSlice.actions;
