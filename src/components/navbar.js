import React, {useState} from "react";
import {Link} from 'react-router-dom';



function Navbar() {
    return (
        <>
            <nav class='navbar'>
                <div class='navbar-container'>
                    <Link to='/' class='navbar-logo'>
                        FIGHT CULTURE LOGO
                    </Link>
                    <div class='menu-icon'>

                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar