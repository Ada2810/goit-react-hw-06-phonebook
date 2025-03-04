import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
