import { ToastContainer } from 'react-toastify';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Box } from './Box';

export default function App() {

  return (
    <Box width="m" p={5} as="div">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} pauseOnHover />
    </Box>
  );
 
}