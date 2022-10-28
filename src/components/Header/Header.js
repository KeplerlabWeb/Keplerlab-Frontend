import React, { useState } from "react";
import logo from '../../assets/title_logo.svg';
import title from '../../assets/title.svg';
import Herologo1 from '../../assets/herologo.svg';
import Herologo2 from '../../assets/heroleftlogo.svg';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import classes from './Header.module.css';



const Header = props => {
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleOpen = event => {
        setClicked(true);
        setToggle(true);
    }
    const handleClose = event => {
        setClicked(false);
        setToggle(false);
    }
    return (
        <div className={classes.Header}>
            <div className={classes.components}>
                <img src={logo} alt="logo" className={classes.title_logo} onClick={()=>{navigate('/')}}/>
                {/* <div className={classes.name} onClick={()=>{navigate('/')}}>Keplerlab</div> */}
                <div className={classes.links}>
                    <div className={`${classes.link} ${props.id === '1' && props.className}`} onClick={()=>{navigate('/about')}}>About us</div>
                    <div className={`${classes.link} ${props.id === '2' && props.className}`} onClick={()=>{navigate('/teams')}}>Teams</div>
                    <div className={`${classes.link} ${props.id === '3' && props.className}`} onClick={()=>{navigate('/products')}}>Products</div>
                    <div className={`${classes.linkL} ${props.id === '4' && props.className}`} onClick={()=>{navigate('/live-sessions')}}>LIVE Sessions</div>
                    <div className={`${classes.link} ${props.id === '5' && props.className}`} onClick={()=>{navigate('/blog')}}>Blog</div>
                    <div className={`${classes.link} ${props.id === '6' && props.className}`} onClick={()=>{navigate('/contact-us')}}>Contact us</div>
                    
                </div>
                    {toggle ? <AiFillCloseCircle className={classes.close} onClick={handleClose}/> : <FaBars className={classes.bar} onClick={handleOpen}/>}
                    
                    {clicked && 
                        <div className={classes.linksMobile}>
                            <div className={classes.linkMobile} onClick={()=>{navigate('/about')}}>About us</div>
                            <div className={classes.linkMobile} onClick={()=>{navigate('/teams')}}>Teams</div>
                            <div className={classes.linkMobile} onClick={()=>{navigate('/products')}}>Products</div>
                            <div className={classes.linkMobileL} onClick={()=>{navigate('/live-sessions')}}>LIVE Sessions</div>
                            <div className={classes.linkMobile} onClick={()=>{navigate('/blog')}}>Blog</div>
                            <div className={classes.linkMobile} onClick={()=>{navigate('/contact-us')}}>Contact us</div>
                        </div>
                    }
                
            </div>
            {props.page === "home" && 
            <div className={classes.hero}>
                <img src={Herologo1} alt="herologo" className={classes.logoHero}/>
                <img className={classes.herologo} src={Herologo2} alt="hero_logo"/>
            </div>
            }       
        </div>
    );
};

export default Header;