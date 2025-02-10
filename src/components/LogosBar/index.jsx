import LogoLoudeacCC from '../../assets/images/logos/LoudeacCommunaute.webp';
import LogoDepartement from '../../assets/images/logos/logo-cotes-d-armor.webp';
import LogoRegion from '../../assets/images/logos/region-bretagne-Logo.webp';
import LogoFrenchServices from '../../assets/images/logos/service-public.webp';
import './logosBar.css';

function LogosBar() {
    return(
        <section className="container-logos">
            <a href="https://www.bretagnecentre.bzh/" className ="circle-logo cl1" target="_blank" rel= "noreferrer">
                <img className="logo" src = {LogoLoudeacCC} alt ="logo de la communauté de communes de loudeac"/>
            </a>
            <a href="https://cotesdarmor.fr/" className ="circle-logo cl2" target="_blank" rel= "noreferrer">
                <img className="logo" src = {LogoDepartement} alt ="logo du département des côtes d'armor"/>
            </a>
            <a href="https://www.bretagne.bzh/" className ="circle-logo cl3" target="_blank" rel= "noreferrer">
                <img className="logo" src = {LogoRegion} alt ="logo de la région bretagne"/>
            </a>            
            <a href="https://www.service-public.fr/" className ="circle-logo cl4" target="_blank" rel= "noreferrer">
                <img className="logo" src = {LogoFrenchServices} alt ="logo du service public français"/>
            </a>
        </section>

    )
}
export default LogosBar;