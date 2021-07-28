import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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
            handleRegister(formData);
          }}
        >
          <h3 className='login-form-header'>Register</h3>
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
          <br />
          <label className='register-email'>
            Email:
            <input
              className='login-input'
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className='login-input'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className='login-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}
