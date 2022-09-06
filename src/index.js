import React from 'react';
// import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


// const root = createRoot(document.getElementById('root'));
// root.render(<App/>) ;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);