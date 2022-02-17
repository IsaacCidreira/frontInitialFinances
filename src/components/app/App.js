import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from '../pages/Login';
import defaultTheme from '../assets/styles/themes/default';
import Global from '../assets/styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <Global />
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
