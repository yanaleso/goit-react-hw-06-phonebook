import ContactListItem from "components/ContactListItem";
import { Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/contactActions";
import { getVisibleContacts } from 'redux/contactSelectors';

const ContactList = () => {
    const visibleContacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    return (
        <ul>
            {visibleContacts.map((contact) => (
                <Item key={contact.id}>
                    <ContactListItem contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
                </Item>
            ))}
        </ul>
    );
}

export default ContactList;