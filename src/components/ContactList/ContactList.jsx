import { useSelector } from 'react-redux';
import CSS from './index.module.css';
import Contact from 'components/Contact/Contact';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul className={CSS.list}>
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
    </ul>
  );
};
export default ContactList;
