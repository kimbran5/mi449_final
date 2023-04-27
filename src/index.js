import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tufte-css/tufte.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.body.style.paddingLeft = '7%';

ReactDOM.render(
  <React.StrictMode>
    <div id="root">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

const rootElement = document.getElementById('root');
rootElement.style.display = 'flex';
rootElement.style.justifyContent = 'center';
rootElement.style.alignItems = 'center';

reportWebVitals();