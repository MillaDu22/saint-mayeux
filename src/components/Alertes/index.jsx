import Vigilances from '../../assets/images/logos/logo_vigilance.webp';
import Routes from '../../assets/images/logos/inforoutes22.webp';
import Vigipirates from '../../assets/images/logos/Urgence-attentat.webp';
import './alertes.css';

function Alertes() {
    return(
        <section className="container-alertes">
            <h2 className="title23">Consulter les alertes</h2>
            <div className="box-link-alertes">
                <a href="https://vigilance.meteofrance.fr/fr/cotes-d-armor" className="link-alertes a1" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-alertes" src ={Vigilances} alt="Logo de vigilances météo du gouvernement"/> </a>
                <a href="https://inforoutes22.cotesdarmor.fr/" className="link-alertes a2" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-alertes" src ={Routes} alt="Logo Inforoutes Côtes d'Armor"/> </a>
                <a href="https://www.sgdsn.gouv.fr/vigipirate" className="link-alertes a3" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-alertes" src ={Vigipirates} alt="Logo Vigipirates"/> </a>
            </div>
        </section>
    )
}
export default Alertes;