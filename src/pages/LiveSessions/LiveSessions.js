import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LiveSessionCard from "../../UI/Card/LiveSession/LiveSessionCard";


import classes from './LiveSessions.module.css';
import LiveSessionHistory from "../../UI/Card/LiveSessionHistory/LiveSessionHistory";

const Sessions = [
    {
        id:1,
        date:'Oct. 13th 5PM (Seoul, UTC+9), 11AM (Addis ababa, UTC+3)',
        title:'A to Z about Intellectual Property for startup',
        name:'ChangMin Lee (Representative Patent Attorney, SJ Partners)',
        sessionNumber:'KeplerLab Live Session IV',
        link:'https://youtu.be/imbxFtO5NM4'
    },
    {   
        id:2,
        date:'Date: Sep. 22nd 8PM (Seoul, UTC+9), 2PM (Addis ababa, UTC+3)',
        title:'My Experience as Ethiopian Developer in Korea',
        name:'Hamdi Abdurhman Ahmed',
        sessionNumber:'KeplerLab Live Sessions III',
        link:'https://www.youtube.com/watch?v=gE3Qx5eB9cU'
        
    },
    {
        id:3,
        date:'Aug. 17th 8PM (Seoul, UTC+9), 2PM (Addis ababa, UTC+3)',
        title:'Quality Assuarance - Hot wo find and fix bugs and make products better',
        name:'Jame Kang (QA Team Lead, Asleep)',
        sessionNumber:'KeplerLab Live Session II',
        link:''
        
    },
    {
        id:4,
        date:'Jul. 6th 5PM (Seoul, UTC+9), 11AM (Addis ababa, UTC+3)',
        title:'Data Compliance for privacy impact assessments and AI ethics',
        name:'Jonathan Kurniawan (CPO, Prodago)',
        sessionNumber:'KeplerLab Live Session I',
        link:''
        
    },
    
];


const LiveSessions = props => {
    return (
        <div>
            <Header
            className = {classes.clicked}
            id = '4'
            />
            <div className={classes.innerContent}>
                <div className = {classes.liveSessionTitle}>KeplerLab Live Sessions</div>
                <LiveSessionCard/>
                <div className={classes.liveSessionHistory}><strong>History</strong></div>
                {
                    Sessions.map(session =>
                        <LiveSessionHistory
                            id={session.id}
                            title={session.title}
                            name={session.name}
                            date={session.date}
                            sessionNumber={session.sessionNumber}
                            link={session.link}
                            className={classes.LiveSessionHistoryCard}
                        />
                    )
                }
            </div>
            <Footer/>
        </div>
    );
};

export default LiveSessions;