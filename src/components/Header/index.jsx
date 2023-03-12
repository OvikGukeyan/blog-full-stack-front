import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../../redux/slices/authSlice';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>OVIK BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Create article</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Sign-Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Sign-In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Sign-Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
