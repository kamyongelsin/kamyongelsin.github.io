import React from 'react';
import logo from '../figures/kg-logo.png';

function Headers() {

    return (
        <React.Fragment>
            <div className="px-4 pt-3 text-center border-bottom sticky-top bg-white">
                <img src={logo} alt="Logo" style={{height:92}}/>
            </div>

        </React.Fragment>
    )
}

export default Headers
