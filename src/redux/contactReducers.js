import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter, deleteContact } from './contactActions';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterReducer = createReducer('', {
    [changeFilter]: (_state, { payload }) => payload,
});

const itemsReducer = createReducer(initialContacts, {
    [addContact]: (state, { payload }) => {state.push(payload)},
    [deleteContact]: (state, { payload }) => state.filter(item => item.id !== payload),
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});