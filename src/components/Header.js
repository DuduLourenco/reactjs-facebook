import React from 'react';

import facebookLogo from '../assets/facebook.svg';

function Header(){
    return(
        <div className="header">
            <div className="header-items">
                <img src={facebookLogo} />
                <span className="header-item-perfil">My profile</span>
            </div>
        </div>
    );
}

export default Header;