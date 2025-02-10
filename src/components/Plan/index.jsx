import React from 'react';
import { Link } from 'react-router-dom';
import './plan.css';

function Plan() {
    return(
        <section id="site-map" className="site-map-section">
            <h2>Plan du site</h2>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/"> Accueil</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/history"> Histoire de Corlay</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/about"> Municipalité</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/medical"> Médical</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/shop"> Commerces</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/services"> Services</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/asso"> Vie associative</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/loisirs"> Loisirs et sports</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/business"> Entreprises</Link></p>
        </section>
    )
}
export default Plan;