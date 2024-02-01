import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { SwitchProvider } from './contexts/switch.context';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SwitchProvider>
        <App />    
      </SwitchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

