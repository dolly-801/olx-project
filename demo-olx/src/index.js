import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Optional, for global styles
import App from './App'; // Import the root component (App)
import reportWebVitals from './reportWebVitals'; // Optional, for reporting web vitals
import 'bootstrap/dist/css/bootstrap.min.css';


// This renders your main App component into the root div in the HTML file
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For reporting performance metrics (optional)
reportWebVitals();
