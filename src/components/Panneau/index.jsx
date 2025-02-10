import React from 'react';
import './panneau.css';
import PanneauCorlay from '../../assets/videos/panneau-corlay.mp4';

const Panneau = () => {
    return (
        <div className="panneau-container">
            <h2 className="title-panneau">Soutien aux agriculteurs</h2>
            <video 
                className="panneau-video" 
                src={PanneauCorlay} 
                autoPlay 
                muted 
            >
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
        </div>
    );
};

export default Panneau;