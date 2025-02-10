import React from 'react';
import './logo.css';
import LogoImg from '../../assets/images/accueil/st-mayeux.webp';

const Logo = () => {
    return (
        <div className="logo-container">
            <img
                className="logo-video" 
                src={LogoImg} 
            />
        </div>
    );
};

export default Logo;