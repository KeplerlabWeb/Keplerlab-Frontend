import React from "react";


import classes from './PartnerCard.module.css';


const PartnerCard = props => {
    return (
        <div className={classes.logo}>
            <img src={props.logo} alt={`${props.title}_image`} onClick={props.onClick} id={props.id}/>
        </div>
    );
}

export default PartnerCard;