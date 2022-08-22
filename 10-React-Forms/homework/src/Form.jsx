import React, { useState } from 'react';

export function validate(input) {
  let errors = {};

  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
    console.log('regex')
  }

  return errors;
};

export default function  Form() {
  const [ input, setInput ] = useState({username: '', password: ''});
  const [ errors, setErrors ] = useState({});

  function handleInputChange(event){
     setInput( oldState => ({...oldState, [event.target.name]: event.target.value }));
     setErrors(validate({...input, [event.target.name]: event.target.value }));
  }

  return (
    <form>
        <div>
          <label>Username:</label>
          <input key='username' type='text' name='username' value={input.username} 
            onChange={ handleInputChange } className={errors.username ? 'danger' : ''}/>
            {errors.username && (<p className="danger">{errors.username}</p>)}
        </div>
        <div>
          <label>Password:</label>
          <input key='password' type='password' name='password' value={input.password} 
            onChange={ handleInputChange } className={errors.password ? 'danger' : ''}/>
            {errors.password && (<p className="danger">{errors.password}</p>)}
        </div>
        <div>
          <button>Submit</button>
        </div>
    </form>
  )
}
