import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForms from '../../LoginForms';

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForms />} />
      </Routes>
    </section>
  );
};

export default Login;
