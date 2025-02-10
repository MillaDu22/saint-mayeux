import BzhGo from '../../assets/images/logos/BzhGo.webp';
import MobiBretagne from '../../assets/images/logos/MobiBretagne.webp';
import './tibus.css';

function Tibus() {
    return(
        <section className="container-tibus">
            <h2 className="title23">Les transports</h2>
            <div className="box-link-tibus">
                <a href="https://www.breizhgo.bzh/sites/default/files/inline-files/horaires-cotes-darmor-ligne5.pdf" className="link-tibus t1" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir le pdf dans un autre onglet'><img className="logo-bzhGo" src ={BzhGo} alt="Logo de BreizhGo le service de transport"/> </a>
                <a href="https://www.bretagnecentre.bzh/fileadmin/user_upload/DEP_TAD-2024-sulian.pdf" className="link-tibus t2" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir le pdf dans un autre onglet'><img className="logo-bzhGo" src ={MobiBretagne} alt="Logo Mobi"/> </a>
            </div>
        </section>
    )
}
export default Tibus;