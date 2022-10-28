import React from "react";
import person from '../../../assets/심수연.png';
import Button from "../../Button/Button";
import Kepler from '../../../assets/title_logo.svg';


import classes from './LiveSessionCard.module.css';


const LiveSession = props => {
    return (
        <div className={classes.liveBanner}>
            <div className= {classes.liveBannerTN}>
                <div className={classes.liveBannerTime}>Nov. 10th 8PM (Seoul, UTC+9), 2PM (Addis ababa, UTC+3)</div>
                <div className={classes.liveBannerNumber}>KeplerLab Live Session V</div>
            </div>
            <hr className={classes.liveBannerBreak}/>
            <div className= {classes.liveBannerTitle}>
                <div className= {classes.liveBannerTitleMain}>How to improve personal impact</div>
                <div className= {classes.liveBannerTitleSub}>Presentation will be provided in English. / 강의는 영어로 진행 됩니다.</div>
            </div>
            <hr className={classes.liveBannerBreak}/>
            <div className= {classes.liveBannerPerson}>
                <div className={classes.liveBannerPersonImgDiv}><img src={person} alt="person_img" className={classes.liveBannerPersonImg}/></div>
                <div className={classes.liveBannerPersonInfo}>
                    <div className={classes.liveBannerPersonInfoName}>Sooyeon Sim / 심수연</div>
                    <div className={classes.liveBannerPersonInfoPosition}>Visual consultant / 비주얼 컨설턴트</div>
                    <div className={classes.liveBannerPersonInfoCompany}>ASK Consulting / ASK컨설팅</div>
                    <div className={classes.liveBannerButtonDiv}><a href="https://tally.so/r/mVL6Rv" target="_blank" rel="noreferrer"><Button className={classes.liveBannerButton}>Register</Button></a></div>
                </div>
            </div>
            <hr className={classes.liveBannerBreak}/>
            <div className={classes.liveBannerKeplerDiv}>
                <img src={Kepler} alt="logo" className={classes.liveBannerKeplerimg}/>
            </div>
        </div>
    );
};

export default LiveSession;