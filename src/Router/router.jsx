import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from '../components/CookiesContext';
import Home from "../pages/Home/index";
/*import About from "../pages/About/index";
import Medical from "../pages/Medical/index";
import Shop from "../pages/Shop/index";
import Services from "../pages/Services/index";
import Asso from "../pages/Asso/index";
import Loisirs from "../pages/Loisirs/index";
import Business from "../pages/Business/index";
import Error from "../pages/Error/index";
import History from "../pages/History/index";*/
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
        <HelmetProvider>
            <CookiesProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />
                    <Route path="/medical" element={<Medical />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/asso" element={<Asso />} />
                    <Route path="/loisirs" element={<Loisirs />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/history" element={<History />} />
                    <Route path="*" element={<Error />} />*/}
                </Routes>
            </CookiesProvider>
        </HelmetProvider>
    );
};

export default Router;