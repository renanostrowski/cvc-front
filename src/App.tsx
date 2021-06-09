import React from 'react';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';
import Signin from './pages/SignIn';
import { Routes } from './routes/routes';

function App() {
  return (
    <>
      <Routes/>
      <GlobalStyle/>
    </>
  );
}

export default App;
