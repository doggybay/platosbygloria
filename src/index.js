import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import store from '../src/store';
import theme from './theme/theme';

import { firebaseConfig } from './firebase-config';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_domain}
      clientId={process.env.REACT_APP_clientId}
      redirectUri={process.env.REACT_APP_redirectUri}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

initializeApp(firebaseConfig);

reportWebVitals();
