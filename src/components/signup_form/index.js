import React from 'react';
import { useState } from 'react';

const SignUp = ({ setNewUser }) => {

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  }) // setting up like a blank form

  const handleClick = () => {
    setNewUser(false);
  };

  const onChange = ( e ) => {
    setFormData({
      ...formData, // spread previous data ( to not lose/ overwrite it )
      [ e.target.name ]: e.target.value // key becomes value of name attribute from event target ( input name="email" )
    })
  }

  // now handle submit... accessing backend so async
  const onSubmit = async ( e ) => {
    e.preventDefault() // prevent default refresh
    console.log( formData ) //test as we go
  }


  return (
    <div className='forms'>
      <h2>SignUp</h2>
      <form 
        autoComplete='off'
        onSubmit={ (e) => onSubmit(e) }
      >
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
          onChange={ (e) => onChange(e) }
        />
        <label htmlFor='password1'>Password: </label>
        <input
          type='password'
          id='password1'
          name='password'
          placeholder='Password'
          minLength='6'
          onChange={ (e) => onChange(e) }
        />
        <input
          type='password'
          id='password2'
          name='password2'
          placeholder='Confirm Password'
          minLength='6'
          onChange={ (e) => onChange(e) }
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
