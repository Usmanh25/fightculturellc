import React from 'react';
import {createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

