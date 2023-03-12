import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useForm } from "react-hook-form";

import styles from './Login.module.scss';
import { selectAuth } from "../../redux/slices/authSlice";

export const Registration = () => {
  // const isAuth = useSelector(selectAuth)
  // const dispatch = useDispatch();
  // const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
  //   defaultValues: {
  //     fullName: 'Ovik',
  //     email: '7777test@gmail.com',
  //     password: '123456'
  //   },
  //   mode: 'onChange'
  // })

  // const onSubmit = async (values) => {
  //   const data = await dispatch(fetchAuth(values));
  //   console.log(data)
  //   if(!data.payload) {
  //     return alert('Failed to login!')
  //   }

  //   if('token' in data.payload) {
  //     window.localStorage.setItem('token', data.payload.token)
  //   }
  // }

  // if(isAuth) {
  //   return <Navigate to='/'/>
  // }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form>
        <TextField className={styles.field} label="Полное имя" fullWidth />
        <TextField className={styles.field} label="E-Mail" fullWidth />
        <TextField className={styles.field} label="Пароль" fullWidth />
        <Button type='submit' size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
