import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShowFooter_Provider from './component/ShowFooter_Provider';
import Scroll_Provider from './component/Scroll_Provider';
import Navigate_Provider from './Context/Navigate_Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navigate_Provider>
    <Scroll_Provider>
      <ShowFooter_Provider>
        <App />
      </ShowFooter_Provider>
    </Scroll_Provider>
    </Navigate_Provider>
  </React.StrictMode>
    
);

reportWebVitals();
