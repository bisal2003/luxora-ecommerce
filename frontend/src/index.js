import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './app/store';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import './luxora-animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
              <App />
              <ToastContainer 
                position='top-right' 
                autoClose={2000} 
                closeOnClick
                theme="dark"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
                toastStyle={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

