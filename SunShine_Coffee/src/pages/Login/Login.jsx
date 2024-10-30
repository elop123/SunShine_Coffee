import React, { useState } from 'react'
import s from './Login.module.scss'


export const Login = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //Message
    alert(`Logging in with ${username}`);
  };

  return (
    <div className={s.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={s.inputStyle}>
          <label>First name</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className={s.inputStyle}>
          <label>Last name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <button type="submit" className={s.buttonStyle}>Sign up</button>
        <button type="submit" className={s.buttonStyle}>Submit</button>
      </form>
     
    </div>
  );
};
