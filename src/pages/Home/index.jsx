import React, { useEffect, useState, useRef } from 'react';
/*import {Link} from 'react-router-dom';*/
import { Helmet } from 'react-helmet-async';
/*import Header from '../../components/Header/index.jsx';*/
import CookiesConsent from '../../components/CookiesConsent/index.jsx';
import Blason from '../../assets/images/accueil/st-mayeux.webp';
/*import ChateauAerien from '../../assets/images/accueil/chateau-aerien.webp';
import Tour from '../../assets/images/accueil/Tour-chateau.webp';
import MaisonCheval from '../../assets/images/accueil/Maison-cheval.webp';
import Talus4 from '../../assets/images/accueil/Talus4.webp';
import Mairie from '../../assets/images/accueil/Place-mairie.webp';
import Marché from '../../assets/images/accueil/Place-marche.webp';
import Pontivy from '../../assets/images/accueil/Route-Pontivy.webp';
import Facades from '../../assets/images/accueil/Facades-maisons.webp';*/
import Meteo from '../../components/Meteo/index.jsx';
import Daterpicker from '../../components/Daterpicker/index.jsx';
import Illiwap from '../../assets/images/logos/logo_illiwap.webp';
import Maps from '../../assets/images/logos/Maps-logo.webp';
import News from '../../components/news/index.jsx';
import Tibus from '../../components/Tibus/index.jsx';
import LocalInfo from '../../components/LocalInfo/index.jsx';
import Alertes from '../../components/Alertes/index.jsx';
/*import Panneau from '../../components/Panneau/index.jsx';*/
import { observeSections } from '../../utils/scrollAnimation';
import './home.css';

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const pageRef = useRef();

    useEffect(() => {
        const consent = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookieConsent='))
        ?.split('=')[1];
    
        if (consent === 'accepted') {
            setCookiesAccepted(true);
    
        // Vérifiez si le script GTM est déjà chargé
        if (!window.dataLayer) {
            // Création et insertion du script Google Tag Manager
            const script = document.createElement('script');
            /*script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-K2D59TZV`;*/
            script.async = true;
            document.body.appendChild(script);
        
            script.onload = () => {
                // Initialisation de Google Analytics
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                /*gtag('config', 'GTM-K2D59TZV');*/
            };
        }
    }
    }, []);

    useEffect(() => {
        observeSections();
    }, []);

    return (
        <div className="container-home">
            <div className="home" ref={pageRef}>
                <React.Fragment>
                    <Helmet>
                        {/* Meta Tags */}
                        <title>Commune de Saint-Mayeux - Patrimoine et Vie Locale en Côtes d'Armor</title>
                        <meta name="description" content="Découvrez la commune de Corlay, située en plein cœur des Côtes d'Armor en Bretagne. Un patrimoine riche, des activités culturelles et touristiques variées, ainsi qu'une qualité de vie unique en Bretagne." />
                        <link rel="canonical" href="https://commune-de-saint-mayeux.vercel.app" />
                        <meta name="keywords" content="Saint-Mayeux, Côtes d'Armor, Bretagne, patrimoine breton, tourisme en Bretagne, vie locale Corlay, cheval breton, haras national, château de Corlay, événements locaux Corlay, nature et randonnées, communes bretonnes, culture bretonne, activités en famille, sites historiques Bretagne, dynamisme rural, marché local Corlay, associations Corlay, vivre en Bretagne, tourisme rural, communes des Côtes d'Armor, campagne bretonne, découvertes en Bretagne, traditions bretonnes, fêtes locales Corlay, hébergement Corlay, restaurants locaux, tourisme durable, environnement préservé" />

                        {/* Open Graph tags for Social Media sharing */}
                        <meta property="og:title" content="Commune de Saint-Mayeux - Découvrez l'authenticité bretonne" />
                        <meta property="og:description" content="Explorez la commune de Saint-Mayeux en Côtes d'Armor, connue pour son patrimoine historique, ses paysages naturels et son dynamisme culturel. Idéal pour les amoureux de la Bretagne." />
                        <meta property="og:image" content="https://commune-de-saint-mayeux.vercel.app/homepage.jpg" />
                        <meta property="og:url" content="https://commune-de-saint-mayeux.vercel.app" />
                        <meta property="og:type" content="website" />
                        <meta property="og:site_name" content="Commune de Saint-Mayeux" />
                        <meta property="fb:app_id" content="100063946335792" />

                        {/* Twitter Card tags for sharing on Twitter */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Commune de Saint-Mayeux - Bretagne et Patrimoine" />
                        <meta name="twitter:description" content="Découvrez la commune de Saint-Mayeux, un trésor caché des Côtes d'Armor, avec son histoire, ses activités locales et son cadre naturel exceptionnel." />
                        <meta name="twitter:image" content="https://commune-de-saint-mayeux.vercel.app/homepage.jpg" />
                    </Helmet>

                    {/* Consentement aux cookies */}
                    <CookiesConsent setCookiesAccepted={setCookiesAccepted} />
                    {/*<Header />*/}
                    <div className= "intro-quadra1">
                        <div className="box-title-intro">
                            <div className="typewriter">
                                <h1 className="title1">Commune de Saint-Mayeux</h1>
                            </div>
                            <img className="blason" src={Blason} alt="blason de St-Mayeux" />
                                <h2 className="title2">Bienvenue à Saint-Mayeux, au cœur de la Bretagne authentique !</h2>
                                <p>C’est avec un immense plaisir que nous vous accueillons sur le site officiel de la commune de Saint-Mayeux, 
                                    un petit écrin niché dans les terres verdoyantes des Côtes d’Armor. 
                                    Ici, au cœur de la Bretagne, traditions, histoire et convivialité se conjuguent pour vous offrir une expérience unique
                                </p>
                                <h2 className="title2">Une histoire riche, un patrimoine vivant</h2>
                                <p>
                                    Saint-Mayeux est fière de son passé, marqué par son rôle central dans l’élevage de chevaux, 
                                    notamment grâce à son fameux haras, témoin d’un savoir-faire ancestral. 
                                    La silhouette de son château, partiellement en ruines mais empreint d’une majesté intemporelle, 
                                    raconte l’histoire d’une Bretagne fière et indépendante. En parcourant nos chemins et ruelles, 
                                    vous découvrirez les traces d’un passé riche, où la culture bretonne s’exprime encore aujourd’hui 
                                    à travers nos fêtes et traditions locales.
                                </p>
                            </div>
                            {/*<div className="box-quadra1-link">
                                <div className ="quadra">
                                    <img className="patrimoine n1" src= {ChateauAerien} alt="Prise aerienne du chateau de Corlay"/>
                                    <img className= "tour n2" src ={Tour} alt ="La tour du chateau de Corlay" />
                                    <img className= "maisoncheval n3" src ={MaisonCheval} alt ="La maison du cheval à Corlay" />
                                    <img className= "talus4 n4" src ={Talus4} alt ="Les courses à l'hippodrome de Corlay" />
                                </div>
                                <Link to="/history" className ="link-history"> Images d'archives < br /><i className="fa-solid fa-eye"></i></Link>
                            </div>*/}
                        </div>
                        <div className="box-intro-quadra2">
                            {/*<div className ="intro-title3">
                                <h2 className="title2">Une commune vivante et tournée vers l’avenir</h2>
                                <p>
                                    Corlay, ce n’est pas qu’un patrimoine ! C’est aussi un lieu de vie chaleureux, 
                                    animé par ses habitants et ses nombreux événements. Que vous soyez amateur de nature, 
                                    curieux d’histoire ou en quête de rencontres, notre commune saura vous séduire.
                                    Entre balades champêtres, marchés locaux et initiatives modernes pour le bien-être de nos résidents, 
                                    Corlay est une ville où il fait bon vivre… et séjourner !
                                    Que vous soyez visiteur, futur habitant ou simplement curieux, 
                                    prenez le temps d’explorer notre site. 
                                    Vous y trouverez toutes les informations pour préparer votre découverte de Corlay et, 
                                    qui sait, peut-être faire de notre commune votre prochain chez-vous.
                                </p>
                                <h3 className="title3">À très bientôt à Corlay, là où la Bretagne bat au rythme de la vie !</h3>
                            </div>
                            <div className="quadra2">
                                <div className ="quadra">
                                    <img className="patrimoine n1" src= {Mairie} alt="Place de l'église après travaux"/>
                                    <img className= "tour n2" src ={Marché} alt ="Place du marché après travaux" />
                                    <img className= "maisoncheval n3" src ={Pontivy} alt ="Route de Pontivy après travaux" />
                                    <img className= "talus4 n4" src ={Facades} alt ="Les façades de la grande rue après ravalement" />
                                </div>
                            </div>*/}
                    </div>
                    {/*<Panneau />*/}
                    <LocalInfo />
                    <Tibus />
                    <Alertes />
                    <h2 className="title25">Les stations</h2>
                    <div className = "box-map-illiwap">
                        <Meteo />
                        <div className="box-dater-map">
                            <Daterpicker />
                            <section id="plan-corlay" className="map-section animate-fade">
                                <div className="welcome-map">
                                    <h2 className="title2"><img className="maps-logo" src={Maps} alt="Logo de Maps" /></h2>
                                    <div className="container-map">
                                        <div className="map-container">
                                            <iframe
                                                title="plan"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.635206854616!2d-3.0628134843537736!3d48.31851937924659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4811acabb83dbb1d%3A0xd1ee8ad1c8a30679!2sCh%C3%A2teau%20de%20Corlay!5e0!3m2!1sfr!2sfr!4v1693666590900!5m2!1sfr!2sfr"
                                                loading="lazy">
                                            </iframe>
                                        </div>
                                    </div>
                                        <p>
                                            Commune de Corlay
                                        </p>
                                        <p>
                                            Code postal : 22320
                                        </p>
                                        <p>
                                            Département : Côtes-d'Armor
                                        </p>
                                        <p>
                                            Région : Bretagne
                                        </p>
                                        <p>
                                            Pays : France
                                        </p>
                                        <p>
                                            Coordonnées GPS : 48.31852887551954, -3.060642017504217
                                        </p>
                                        <p>
                                            Située au cœur de la Bretagne, Corlay est une charmante commune célèbre pour son patrimoine 
                                            historique et ses paysages pittoresques. Sa riche histoire est marquée par des monuments 
                                            emblématiques tels que le Château de Corlay, qui surplombe fièrement la région.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div className="box-illiwap-meteo">
                                <section className="illiwap">
                                    <div className="container-illiwap">
                                        <iframe
                                            scrolling="yes" 
                                            allowtransparency="true"
                                            allowFullScreen={true} 
                                            title="Fil d'actu Mairie de Corlay" 
                                            src="https://station.illiwap.com/fr/public/22047/actu/embed"
                                            loading="lazy">
                                        </iframe>
                                        <div className="bar-illiwap">
                                            <h2 className="title24"><img className ="illiwap-logo" src ={Illiwap} alt ="Logo Illiwap" /></h2>
                                            <div className="container-links-illiwap">
                                                <a className="link-illiwap" target="blank" href="https://station.illiwap.com/fr/public/22047/actu/">
                                                    <span>Consulter l'actualité</span>
                                                </a>
                                                <a className="link-illiwap" target="blank" href="https://station.illiwap.com/fr/public/22047/evenements/">
                                                    <span>Consulter l'agenda</span>
                                                </a>
                                                <a className="link-illiwap" target="blank" href="https://station.illiwap.com/fr/public/22047/signalement/">
                                                    <span>Envoyer un signalement</span>
                                                </a>
                                                <a className="link-illiwap" target="blank" href="https://station.illiwap.com/fr/public/22047/idee/">
                                                    <span>Boîte à idées</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <News />
                </React.Fragment>
            </div>
        </div>                      
    )
}
export default Home;






