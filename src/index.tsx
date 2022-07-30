import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeWrapper from './components/ThemeWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeWrapper>
);

