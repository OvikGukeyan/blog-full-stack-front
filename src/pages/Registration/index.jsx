import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";


import styles from './Login.module.scss';
import { selectAuth, fetchRegister } from "../../redux/slices/authSlice";

export const Registration = () => {
  const isAuth = useSelector(selectAuth)
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: 'Ovik1',
      email: 'test@gmail.com',
      password: '123456'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if(!data.payload) {
      return alert('Failed to register!')
    }

    if('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if(isAuth) {
    return <Navigate to='/'/>
  }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
         error={Boolean(errors.fullName?.message)}
         helperText={errors.fullName?.message}
         {...register('fullName', { required: 'Enter yore Email' })}
         className={styles.field} 
         label="Enter yore full name" 
         fullWidth />
        <TextField 
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {...register('email', { required: 'Enter yore Email' })}
        className={styles.field} 
        label="E-Mail" 
        fullWidth />
        <TextField 
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register('password', { required: 'Enter yore password' })}
        className={styles.field} 
        label="Password" 
        fullWidth />
        <Button disabled={!isValid} type='submit' size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
