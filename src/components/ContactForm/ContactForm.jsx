import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactSlice';
import { toast } from 'react-toastify';
import { nanoid } from "nanoid";
import { Button, Input, Label } from './ContactForm.styled';
import { Box } from 'components/Box';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Something went wrong in ContactForm`);
    }
  };

  const setContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isContact = items.find(item => item.name === name);

    if (isContact) {
      return toast.error(`${name} is already in contact`);
    }

    dispatch(addContact(contact));
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    setContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
        <Box display="flex" flexDirection="column" width="m" mb={5} onSubmit={handleSubmit} as="form">
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Box>
    );
}
