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
      className="card p-5 mx-auto"
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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="on"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" id="exampleInputPassword1" />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default FormLogin;
