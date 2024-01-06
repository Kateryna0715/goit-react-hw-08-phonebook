import { useDispatch, useSelector } from 'react-redux';
import CSS from './index.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    isLoggedIn ? dispatch(logOut()) : navigate('/login');
  };
  return (
    <>
      <div className={CSS.headerContainer}>
        <nav className={CSS.headerNav}>
          {/* <div className={CSS.LogoContainer}>
            <Link to="/">
              <span className={CSS.headerLogo}></span>
            </Link>
          </div> */}
          <ul className={CSS.headerList}>
            <li>
              <NavLink to="/" className={CSS.headerLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={CSS.headerLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <ul className={CSS.headerList}>
            <li>
              <NavLink to="/registration" className={CSS.headerLink}>
                Register
              </NavLink>
            </li>
            <li>
              <button onClick={handleClick}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
              </button>
              {/* <NavLink to="/login" className={CSS.headerLink}>
                Log In
              </NavLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
