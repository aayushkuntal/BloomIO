import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = ({ isSignInPage = true }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: ''
    }),
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your Auth submission logic here
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
              label="Full name"
              name="name"
              placeholder="Enter your full name"
              className="auth-input"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="auth-input"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
          <Button
            label={isSignInPage ? 'Sign in' : 'Sign up'}
            type="submit"
            className="auth-button"
          />
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
