import React from "react";
// import Button from "../../Button/Button";

import classes from './MilestoneCard.module.css';



const MilestoneCard = ({milestone}) => {
    return (
        <div className={classes.card}>
            <div className={classes.number}>{milestone.amount}</div>
            <div className={classes.title}>{milestone.title}</div>
            <div className={classes.content}>{milestone.description}</div>
            {/* <div className={classes.buttondiv}><Button className={classes.button} onClick={props.onClick} type="button" id={props.number}>read more...</Button></div> */}
        </div>
    );
}

export default MilestoneCard;