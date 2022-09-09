import React from 'react';
import {hydrateRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
hydrateRoot(container, <App />);