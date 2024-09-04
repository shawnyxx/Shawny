import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register();

reportWebVitals();