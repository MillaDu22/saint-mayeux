import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.jsx';
import './navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="container-navbar">
            <nav className="nav-header">
                {/* Bouton de menu burger pour mobile */}
                <button className={`menu-toggle ${isMobileMenuOpen ? "hidden" : ""}`} onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Bouton pour fermer le menu mobile */}
                {isMobileMenuOpen && (
                    <button className="menu-close" onClick={closeMobileMenu}>
                        ✖
                    </button>
                )}

                {/* Logo centré */}
                <div className="logo-centered">
                    <Logo />
                </div>

                {/* Conteneur complet du menu (sections gauche et droite) */}
                <div className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
                    {/* Section gauche */}
                    <div className="nav-left">
                        <Link className="nav-item" to="/" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-home" style={{ fontSize: '15px', marginRight: '10px' }}></i>Accueil</p>
                        </Link>
                        <Link className="nav-item" to="/about" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-landmark" style={{ fontSize: '15px', marginRight: '10px' }}></i>Municipalité</p>
                        </Link>
                        <Link className="nav-item" to="/medical" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-user-md" style={{ fontSize: '15px', marginRight: '10px' }}></i>Medical</p>
                        </Link>
                        <Link className="nav-item" to="/shop" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-shopping-cart" style={{ fontSize: '15px', marginRight: '10px' }}></i>Commerces</p>
                        </Link>
                    </div>

                    {/* Section droite */}
                    <div className="nav-right">
                        <Link className="nav-item" to="/services" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-hands-helping" style={{ fontSize: '15px', marginRight: '10px' }}></i>Services</p>
                        </Link>
                        <Link className="nav-item" to="/asso" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-handshake" style={{ fontSize: '15px', marginRight: '10px' }}></i>Associations</p>
                        </Link>
                        <Link className="nav-item" to="/loisirs" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-futbol" style={{ fontSize: '15px', marginRight: '10px' }}></i>Loisirs</p>
                        </Link>
                        <Link className="nav-item" to="/business" onClick={toggleMobileMenu}>
                            <p className="nav-item-text"><i className="fas fa-building" style={{ fontSize: '15px', marginRight: '10px' }}></i>Entreprises</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;