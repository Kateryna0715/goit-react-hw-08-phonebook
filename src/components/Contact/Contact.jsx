import { useDispatch } from 'react-redux';
import CSS from './index.module.css';
import { deleteContact } from '../../redux/operations';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={CSS.listElement}>
      {name}: {phone}
      <button className={CSS.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
