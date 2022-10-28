import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SanitizedDiv from "../../components/SanitizedDiv/SanitizedDiv";
import EnTxt from "./en";
import './PrivacyPolicy.scss';



const PrivacyPolicy = props => {
    return (
        <div>
            <Header/>
            <div className="privacyTitle">Privacy Policy</div>
            <SanitizedDiv text={EnTxt()}/>
            <Footer page="privacy-policy"/>
        </div>
    );
};

export default PrivacyPolicy;