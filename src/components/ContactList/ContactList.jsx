import { useSelector } from 'react-redux';
import CSS from './index.module.css';
import Contact from 'components/Contact/Contact';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul className={CSS.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};
export default ContactList;
