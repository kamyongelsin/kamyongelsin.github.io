import React, { useState} from 'react';
import logo from '../figures/kg-logo.png';

function Headers() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 20){
            setColorchange(true);
            }
        else{
            setColorchange(false);
            }
        };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <React.Fragment>
            <div className="px-4 pt-3 text-center border-bottom sticky-top bg-white">
                <img src={logo} alt="Logo" style={{height:92}}/>
            </div>

        </React.Fragment>
    )
}

export default Headers
