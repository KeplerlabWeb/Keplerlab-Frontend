import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SanitizedDiv from "../../components/SanitizedDiv/SanitizedDiv";
import EnTxt from "./en";
import './TermsOfUse.scss';



const TermsOfUse = props => {
    return (
        <div>
            <Header/>
            <div className="termsTitle">Terms of Use</div>
            <SanitizedDiv text={EnTxt()}/>
            <Footer page="terms-of-service"/>
        </div>
    );
};

export default TermsOfUse;