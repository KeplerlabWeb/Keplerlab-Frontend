import React from "react";
import Button from "../../Button/Button";
// import { Navigate } from "react-router-dom";


import classes from './ProductsCard.module.css';



const ProductsCard = props => {

    return (
        <div className={`${classes.card} ${props.className}`}>
            
            <div className={classes.logoDiv}>
                <img className={classes.logo} src={props.logo} alt={`${props.title}_image`}/>
            </div>
            <div className={classes.cardContent}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.content}>{props.content}</div>
                <div className={classes.buttondiv}>{props.title === 'Arrange Hospital' ? <Button className={classes.Button} onClick={props.wasClicked}>Read More</Button> :<Button className={classes.Button}><a href={props.link} target="_blank" rel="noreferrer" className={classes.ProjectA}>Read More</a></Button>}</div>

            </div>
        </div>
    );
};

export default ProductsCard;