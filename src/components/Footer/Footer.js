import React, {useEffect} from "react";
import logo from '../../assets/Logo.svg';
import title from '../../assets/title.svg';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import classes from './Footer.module.css';

const footer = {
    description: "Solving unmet needs around us in the field of IT with a global software engineering team with Korean and Ethiopian members.",
    facebook: "https://www.facebook.com/profile.php?id=100084264908585",
    instagram: "https://instagram.com/qagnewek?igshid=YmMyMTA2M2Y=",
    twitter: "https://twitter.com/kepler_ltd",
    LinkedIn: "https://www.linkedin.com/company/kepler-lab-co-ltd/mycompany/?viewAsMember=true",
    telegram: "https://t.me/+X2lhADkcwPk0MGE0",
    YouTube: "https://www.youtube.com/channel/UCXngz4vBJ5FZgBfJBatbS6Q",
    first_title: "Company",
    first_link: "About",
    second_link: "Contact",
    second_title: "Legal",
    third_link: "Privacy Policy",
    fourth_link: "Terms of Service"

}

const Footer = props => {

    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
      }, [navigate]);

    return (
        <div className={classes.footer}>
            <div className={classes.kepler}>
                <div><img src={logo} className={classes.logo} alt="logo"/> </div>
                <div><img src={title} className={classes.title} alt="title"/></div>
                <div className={classes.description}>{footer.description}</div>
                <div className={classes.socials}>
                    <a href={footer.facebook} target="_blank" rel="noreferrer"><BsFacebook className={classes.social} alt="facebook_logo"/></a>
                    <a href={footer.instagram} target="_blank" rel="noreferrer"><BsInstagram className={classes.social} alt="instagram_logo"/></a>
                    <a href={footer.twitter} target="_blank" rel="noreferrer"><BsTwitter className={classes.social} alt="twitter_logo"/></a>
                    <a href={footer.LinkedIn} target="_blank" rel="noreferrer"><BsLinkedin className={classes.social} alt="linkedIn_logo"/></a>
                    <a href={footer.telegram} target="_blank" rel="noreferrer"><BsTelegram className={classes.social} alt="telegram_logo"/></a>
                    <a href={footer.YouTube} target="_blank" rel="noreferrer"><BsYoutube className={classes.social} alt="youtube_logo"/></a>
                </div>
            </div>
            <div>
                <div className={classes.links}>{footer.first_title}</div>
                <div className={`${props.page === 'about'? classes.linkHighlighted : classes.link}`} onClick={()=>navigate('/about')}>{footer.first_link}</div>
                <div className={`${props.page === 'contact-us'? classes.linkHighlighted : classes.link}`} onClick={()=>navigate('/contact-us')}>{footer.second_link}</div>
            </div>
            <div>
                <div className={classes.links}>{footer.second_title}</div>
                <div className={`${props.page === 'privacy-policy'? classes.linkHighlighted : classes.link}`} onClick={()=>navigate('/privacy-policy')}>{footer.third_link}</div>
                <div className={`${props.page === 'terms-of-service'? classes.linkHighlighted : classes.link}`} onClick={()=>navigate('/terms-of-service')}>{footer.fourth_link}</div>
            </div>
            <div className={classes.keplerMobile}>
                <img src={logo} className={classes.logo} alt="logo"/> 
                <div className={classes.title}>{footer.title}</div>
                <div className={classes.description}>{footer.description}</div>
                <div className={classes.socials}>
                    <a href={footer.facebook}><BsFacebook className={classes.social} alt="facebook_logo"/></a>
                    <a href={footer.instagram}><BsInstagram className={classes.social} alt="instagram_logo"/></a>
                    <a href={footer.twitter}><BsTwitter className={classes.social} alt="twitter_logo"/></a>
                    <a href={footer.LinkedIn}><BsLinkedin className={classes.social} alt="linkedIn_logo"/></a>
                    <a href={footer.telegram}><BsTelegram className={classes.social} alt="telegram_logo"/></a>
                    <a href={footer.YouTube}><BsYoutube className={classes.social} alt="youtube_logo"/></a>
                </div>
            </div>
          
        </div>
    );
};

export default Footer;