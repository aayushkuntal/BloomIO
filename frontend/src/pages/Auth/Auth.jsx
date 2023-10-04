import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';
import ClipLoader from "react-spinners/ClipLoader";

const Auth = ({ isSignInPage = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    ...(!isSignInPage && {
      firstname: '',
      lastname: ''
    }),
    username: '',
    password: ''
  });

  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignInPage) {
      // Sign In logic
      dispatch(logIn(data));
    }
    else {
      // Sign Up logic
      dispatch(signUp(data));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-heading">
          Welcome {isSignInPage && 'Back'}
        </div>
        <div className="auth-subheading">
          {isSignInPage ? 'Sign in to get explored' : 'Sign up to get started'}
        </div>
        <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
          {!isSignInPage && (
            <Input
              label="First Name"
              name="fname"
              placeholder="Enter your full name"
              className="auth-input"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
          )}
          {!isSignInPage && (
            <Input
              label="Last Name"
              name="lname"
              placeholder="Enter your full name"
              className="auth-input"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />

          )}
          <Input
            label="Email address"
            type="email"
            name="username"
            placeholder="Enter your email"
            className="auth-input"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="auth-input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {loading ? (
            <ClipLoader loading= {true}/>
          ) : (
            <Button
              label={isSignInPage ? 'Sign in' : 'Sign up'}
              type="submit"
              className="auth-button"
            />
          )}
        </form>
        <div className="auth-switch">
          {isSignInPage ? "Didn't have an account?" : "Already have an account?"}{' '}
          <span
            className="auth-link"
            onClick={() => navigate(`/${isSignInPage ? 'signup' : 'signin'}`)}
          >
            {isSignInPage ? 'Sign up' : 'Sign in'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
