import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AppTheme from './themes/AppTheme';
import MainRouter from "./router/MainRouter";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <MainRouter />
      </ThemeProvider>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
