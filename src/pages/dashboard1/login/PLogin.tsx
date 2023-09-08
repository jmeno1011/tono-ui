import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from "react-redux";
import styles from "./PLogin.module.css"
import { login } from 'redux/features/auth';

export default function PLogin() {
  const dispatch = useDispatch();
  const [id, setId] = useState('test');
  
  const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setId(e.target.value);
  }
  const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const logData = {
      div: 'p',
      user: id
    }
    dispatch(login(logData));
  }
  return (
    <div className={styles.container}>
      <h2>P - Dashboard</h2>
      <h3>Sign In</h3>
      <form className={styles.form} onSubmit={onSubmit}>
        <input type="text" id="id" value={id} onChange={onChange} />
        <button>Sign in</button>
      </form>
    </div>
  )
}
