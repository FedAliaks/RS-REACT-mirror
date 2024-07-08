import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import MyErrorBoundary from './components/error-boundary/ErrorBoundaty.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyErrorBoundary>
      <App />
    </MyErrorBoundary>
  </React.StrictMode>
);
