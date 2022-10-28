import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import InputForm from "../../components/InputForm/InputForm";


import classes from './Contact.module.css';

const Contact = props => {

    const [toggle, setToggle] = useState(false);


    const HandleOption1 = event => {
        setToggle(false);
    }
    const HandleOption2 = event => {
        setToggle(true);
    }

    return (
        <div>
         <Header
            className={classes.clicked}
            id = '6'
        />
        <div className={classes.contactTitle}>Contact us</div>
        <div className={classes.toggle}>
            <div className={`${!toggle ? classes.selected : classes.option}`} onClick={HandleOption1}>General Inquiry</div>
            <div className={`${toggle ? classes.selected : classes.option}`} onClick={HandleOption2}>Investment & Partnership</div>
        </div>
        {!toggle?<InputForm page="contact" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>:<InputForm page="contact" templateId="template_m2sbafq" serviceId="service_5l9yxn5" publicKey="-A1J_BPYvSOWeNzxH"/>}
         <Footer page="contact-us"/>
        </div>
    );
};

export default Contact;