import React from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/Button/Button";


import classes from './PopUp.module.css';


const Overlay = props => {
    return (<div className={classes.overlay} onClick={props.onClick}/>);
};

const Modal = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.title}>{props.title}</div>
            <hr/>
            <div className={classes.content}>{props.content}</div>
            <div className={classes.buttondiv}><Button className={`${classes.button} ${props.className}`} onClick={props.onClick}>{props.value}</Button></div>
        </div>        
    );
};
const PopUp = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay onClick={props.handleClick}/>, document.getElementById("overlay-root"))}
            {ReactDOM.createPortal(<Modal title={props.title} content={props.content} className={props.className} onClick={props.handleClick} value={props.value}/>, document.getElementById("modal-root"))}
        </React.Fragment>
    );
}

export default PopUp;