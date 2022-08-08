import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction('contact/change');
export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
