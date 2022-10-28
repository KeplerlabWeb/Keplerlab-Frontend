import React from "react";
import classes from './Hero.module.css';
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Hero =  props =>{
    const navigate = useNavigate();
    return (
        <div className={classes.hero}>
            <div className={classes.heromain}>
                <div className={classes.title}>Trustful global software engineering company laser focused on delivering products and services that solve every day challenges.</div>
                <Button className={classes.button1} onClick={()=>navigate('/contact-us')}>Contact us</Button>
                <Button className={classes.button2} onClick={()=>navigate('/products')}>Products</Button>
            </div>
            <div className={classes.description}>To solve unmet needs around us in the field of IT with a global software engineering team with Korean and Ethiopian members. We are pursuing world peace and achieving sustainable development goal.</div>
        </div>
    );

};

export default Hero;

