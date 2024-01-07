import { useSelector } from 'react-redux';
import CSS from './index.module.css';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <ul className={CSS.headerList}>
          <li>
            <NavLink to="/" className={CSS.headerLink}>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts" className={CSS.headerLink}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
