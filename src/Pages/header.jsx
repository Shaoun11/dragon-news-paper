import React from 'react';
import logo from "../../public/./assets/logo.png"
const Header = () => {
    return (
        <div className='flex justify-center'>
            <img className='items-center' src={logo} alt="" />
        </div>
    );
};

export default Header;