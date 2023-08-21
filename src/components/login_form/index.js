import React from 'react';

const LoginForm = ({ setNewUser }) => {
  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form autoComplete='off'>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' placeholder='Email' />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
        />
        <button type='submit'>Log In</button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
