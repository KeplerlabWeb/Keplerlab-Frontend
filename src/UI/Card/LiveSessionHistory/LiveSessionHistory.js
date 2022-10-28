import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


import classes from './LiveSessionHistory.module.css';


const LiveSessionHistory = props => {
    const [open, setOpen] = useState(false);


    const handleOpen = event => {
        event.preventDefault();
        setOpen(true);
    }
    const handleClose = event => {
        event.preventDefault();
        setOpen(false);
    }
    return (
        <div className={props.className}>
            {!open ? 
                <div className={classes.perviousLiveSession} onClick={handleOpen}>
                    <div className={classes.perviousLiveSessionTitle}>{props.sessionNumber}</div>
                    <div className={classes.perviousLiveSessionDropdown}><FaAngleDown/></div>
                </div>:
                <div>
                    <div className={classes.perviousLiveSession} onClick={handleClose}>
                        <div className={classes.perviousLiveSessionTitle}>{props.sessionNumber}</div>
                        <div className={classes.perviousLiveSessionDropdown}><FaAngleUp/></div>
                    </div>
                    <div className={classes.perviousLiveSessionDetails}>
                        <div className={classes.perviousLiveSessionDetail}>Date: {props.date}</div>
                        <div className={classes.perviousLiveSessionDetail}>{props.sessionNumber}</div>
                        <div className={classes.perviousLiveSessionDetail}>Title: {props.title}</div>
                        <div className={classes.perviousLiveSessionDetail}>{props.name}</div>
                        <div className={classes.perviousLiveSessionDetail}>YouTube Link: {props.link === ''? 'No YouTube Link': <a href={props.link}>{props.sessionNumber}</a>}</div>
                    </div>
                </div>
                }
        </div>
    );
};

export default LiveSessionHistory;