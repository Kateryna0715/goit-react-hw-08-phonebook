import CSS from './index.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
              <NavLink to="/login" className={CSS.headerLink}>
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" className={CSS.headerLink}>
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
