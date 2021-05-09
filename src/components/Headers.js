import React, { useState} from 'react';

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
            <div className={colorChange ? 'px-4 pt-3 text-center border-bottom sticky-top bg-primary text-white' : 'px-4 pt-3 text-center border-bottom sticky-top bg-white'}>
                <h1 className="display-6 fw-bold">
                    <span className={colorChange ? '' : 'text-primary'}>
                        kamyongelsin.com
                    </span>
                </h1>
                
                <div className="lead fst-italic">
                    Şehir içi ve şehirler arası taşımacılık                    
                </div>
            </div>

        </React.Fragment>
    )
}

export default Headers