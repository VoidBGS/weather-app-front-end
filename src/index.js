import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createRoutes from './routes';
import './styles.css';

const routes = createRoutes();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
