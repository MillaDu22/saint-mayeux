import InfoLocal from '../../assets/images/logos/InfoLocale.webp';
import Tourisme from '../../assets/images/logos/CdA.webp';
import './localInfo.css';

function LocalInfo() {
    return(
        <section className="container-local-info">
            <h2 className="title23">Bougez, sortez, découvrez les Côtes d'Armor et vivez Corlay</h2>
            <div className="box-link-local-info">
                <a href="https://infolocale.ouest-france.fr/evenements?commune=22047" className="link-local-info li1" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir le pdf dans un autre onglet'><img className="logo-local-info" src ={InfoLocal} alt="Logo de info-locale de Ouest-France"/> </a>
                <a href="https://www.cotesdarmor.com/" className="link-local-info li2" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir le pdf dans un autre onglet'><img className="logo-local-info" src ={Tourisme} alt="Logo de côtes d'armor tourisme"/> </a>
            </div>
        </section>
    )
}
export default LocalInfo;