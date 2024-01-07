import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';

const FormLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );

    form.reset();
  };
  return (
    <div
      style={{
        width: 500,
        backgroundColor: '#ffffff',
        marginBottom: '12px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Link type="button" to="/">
          go home
        </Link>
        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            name="email"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input
            name="password"
            type="password"
            id="inputPassword"
            placeholder="Enter your password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default FormLogin;
