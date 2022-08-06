import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
            items: initialContacts,
            filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            return state.items.filter(item => item.id !== action.payload);
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

// Selectors

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
debugger
export const getVisibleContacts = state => {
    const normalizedFilter = getFilter(state).toLowerCase();
    const contacts = getContacts(state);
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};