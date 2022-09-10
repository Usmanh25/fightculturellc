import React from 'react';
import {hydrateRoot} from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// hydrateRoot(document.getElementById('root'), <App />);

// document !== 'undefined' ? hydrateRoot(document.getElementById('root'), <App />) : null


    hydrateRoot(document.getElementById("root"),
        <div>
            <React.StrictMode>    
                <BrowserRouter>
                    <App />  
                </BrowserRouter>  
            </React.StrictMode>
        </div>
    );
