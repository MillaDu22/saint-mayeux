import React, { useEffect } from "react";
import './daterpicker.css'

const TimeWidget = () => {
    useEffect(() => {
        // Ajout dynamiquement le script Time.is
        const script = document.createElement("script");
        script.src = "https://widget.time.is/fr.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
        if (window.time_is_widget) {
            window.time_is_widget.init({
            France_z71f: {
                template: `
                <div class="date-time style='font-family= Futura LT'>
                    <span style="margin-right: 8px;">
                    <i class="fa-regular fa-clock" style='color:blue'></i>
                    </span>TIME
                </div>
                <div class="date-time style='font-family= Futura LT'>
                    <span style="margin-right: 8px">
                    <i class="fa-regular fa-calendar" style='color:red'></i>
                    </span>DATE
                </div>
                <div class="date-time style='font-family= Futura LT'>
                    <span style="margin-right: 8px;">
                    <i class="fa-regular fa-sun" style='color:yellow'></i>
                    </span>SUN
                </div>
                `,
                time_format: "hours:minutes",
                date_format: "dayname dnum monthname year, week",
                sun_format: `
                Lever: srhourhsrminute -
                Coucher: sshourhssminute -
                Durée: dlhourshdlminutes
                `,
                coords: "46.0000000,2.0000000",
            },
            });
        }
        };

        return () => {
        document.body.removeChild(script); // Nettoyage du script au démontage
        };
    }, []);

    return (
        <div className="boxdater"
        style={{
            color: "#1e5a6e",
            fontSize: "18px",
            lineHeight:"20px",
            fontWeight: "300",
            padding: "10px",
        }}
        >
        <h2 className ="title-time-is"><span>TIME.IS</span></h2>
        <a 
            href="https://time.is/France"
            id="time_is_link"
            rel="nofollow"
            style={{
            textDecoration: "none",
            color: "#1e5a6e",
            fontFamily:"Futura LT, sans-serif",
            fontSize:"18px",
            lineHeight:"20px",       
            fontWeight: "400",
            }}
        ><i className="fas fa-map-marker-alt" ></i>Corlay
        </a>
        <span 
            id="France_z71f"
            style={{
                color: "#1e5a6e",
                fontFamily:"Futura LT",
                fontSize:"18px",
                lineHeight:"20px",
                fontWeight: "400",
                }}>
            </span>
        </div>
    );
};

export default TimeWidget;
