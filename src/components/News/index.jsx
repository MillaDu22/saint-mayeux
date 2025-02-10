import OuestFrance from '../../assets/images/news/ouestfrance.webp';
import Telegramme from '../../assets/images/news/telegramme.webp';
import LoudeacCom from '../../assets/images/news/LoudeacCom.webp';
import Bretagne from '../../assets/images/logos/region-bretagne-Logo.webp';
import CotesdArmor from '../../assets/images/logos/logo-cotes-d-armor.webp';
import './news.css';

function News() {
    return(
        <section className ="container-news">
            <h2 className= "title22">La presse locale</h2>
            <div className= "container-mag">
                <a href="https://www.ouest-france.fr/bretagne/corlay-22320/" className= "link-news j1" target="_blank" rel="noopener noreferrer"><img src={ OuestFrance} className ="logo-journal" alt="logo du Ouest France" /></a>
                <a href="https://www.letelegramme.fr/cotes-d-armor/corlay-22320/" className= "link-news j2" target="_blank" rel="noopener noreferrer"><img src={ Telegramme} className ="logo-journal" alt="logo du Télégramme" /></a>
                <a href="https://www.bretagnecentre.bzh/information/publications" className= "link-news j3" target="_blank" rel="noopener noreferrer"><img src={ LoudeacCom} className ="logo-journal" alt="logo du Loudeac communauté de communes" /></a>
                <a href="https://cotesdarmor.fr/cotes-d-armor-magazine" className= "link-news j4" target="_blank" rel="noopener noreferrer"><img src={ CotesdArmor} className ="logo-journal" alt="logo du Côtes d'Armor magazine" /></a>
                <a href="https://www.bretagne.bzh/vivre/b-notre-magazine/" className= "link-news j5" target="_blank" rel="noopener noreferrer"><img src={ Bretagne} className ="logo-journal" alt="logo de la région Bretagne" /></a>
            </div>
        </section>
    )
}
export default News;