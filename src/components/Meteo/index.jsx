import React, { useEffect, useRef } from "react";
import './meteo.css';

const WeatherWidget = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        // Ajouter le script dynamiquement uniquement si ce n'est pas déjà fait
        if (!document.getElementById("weatherwidget-io-js")) {
        const script = document.createElement("script");
        script.src = "https://weatherwidget.io/js/widget.min.js";
        script.id = "weatherwidget-io-js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Réinitialiser le widget si le script est chargé
            if (window.__weatherwidget_init) {
            window.__weatherwidget_init();
            }
        };
        } else {
        // Réinitialiser le widget si le script est déjà chargé
        if (window.__weatherwidget_init) {
            window.__weatherwidget_init();
        }
        }
    }, []);

    return (
        <section className="meteo-section">
            <div className="box-meteo" ref={widgetRef}>
            <h2 className="title-meteo">Weather</h2>
            <a
                className="weatherwidget-io"
                href="https://forecast7.com/fr/48d32n3d06/corlay/"
                data-label_1="CORLAY"
                data-label_2="Bretagne, France"
                data-theme="original"
                data-basecolor="#f9f9f9" 
                data-suncolor="#ffda00" 
                data-mooncolor="#febc2f" 
                data-cloudfill="#fffffff" 
                data-raincolor="#00a7ff" 
                data-textcolor="#1e5a6e"
                data-highcolor="#1e5a6e"
            >
                CORLAY Bretagne, France
            </a>
            </div>
        </section>
    );
};

export default WeatherWidget;


