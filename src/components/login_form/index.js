import React from 'react';
import { useState } from 'react';

const LoginForm = ({ setNewUser }) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  }) // setting up like a blank form

  const handleClick = () => {
    setNewUser(true);
  };


  const onChange = ( e ) => {
    setFormData({
      ...formData, //spread previous data
      [ e.target.name ]: e.target.value // key becomes value of name attribute from event target ( input name="email" )
    })
  }

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form autoComplete='off'>
        <label htmlFor='email'>Email: </label>
        <input 
          type='email' 
          id='email' 
          name='email' 
          placeholder='Email'
          onChange={ (e) => onChange(e) }
        />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
          onChange={ (e) => onChange(e) }
    // extra validation just in case. never hurts to have front end validation - dylan
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
