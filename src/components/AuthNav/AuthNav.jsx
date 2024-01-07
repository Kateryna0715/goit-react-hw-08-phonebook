import { NavLink } from 'react-router-dom';
import CSS from './index.module.css';

export const AuthNav = () => {
  return (
    <div className={CSS.authNavContainer}>
      <NavLink to="/register" className={CSS.headerLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={CSS.headerLink}>
        Log In
      </NavLink>
    </div>
  );
};
