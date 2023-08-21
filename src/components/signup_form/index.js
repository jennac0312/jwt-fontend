import React from 'react';

const SignUp = ({ setNewUser }) => {
  const handleClick = () => {
    setNewUser(false);
  };

  return (
    <div className='forms'>
      <h2>SignUp</h2>
      <form autoComplete='off'>
        <label htmlFor='name1'>Name: </label>
        <input
          type='text'
          id='name1'
          name='name'
          placeholder='First and Last Name'
        />
        <label htmlFor='email1'>Email: </label>
        <input
          type='email'
          id='email1'
          name='email'
          placeholder='Email'
        />
        <label htmlFor='password1'>Password: </label>
        <input
          type='password'
          id='password1'
          name='password'
          placeholder='Password'
          minLength='6'
        />
        <input
          type='password'
          id='password2'
          name='password2'
          placeholder='Confirm Password'
          minLength='6'
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;
