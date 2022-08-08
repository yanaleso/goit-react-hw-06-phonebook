export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getVisibleContacts = state => {
    const normalizedFilter = getFilter(state).toLowerCase();
    const contacts = getContacts(state);
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};