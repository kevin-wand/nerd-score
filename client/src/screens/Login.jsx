import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <form className='login-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <h3 className='login-form-header'>Login</h3>
          <label>
            Username:
            <input
              className='login-input'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <label className='login-password'>
            Password:
            <input
              className='login-input'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <div className='login-button-container'>
            <button className='login-button'>Login</button>
            <Link to='/register'><button className='login-button'>Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
