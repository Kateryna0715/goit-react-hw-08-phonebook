import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from '../../redux/auth/operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.contacts = [];
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
