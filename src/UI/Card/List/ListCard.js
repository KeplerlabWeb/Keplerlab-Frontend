import React from "react";
import Button from "../../Button/Button";


import classes from './ListCard.module.css';


const ListCard = props => {
    return (
        <div>
            {props.id%2 === 0 ?
            <div className={classes.list}>
                <div className={classes.listImageDivEven}><img src={props.image} alt={`${props.title}_image`} className={classes.listImage}/></div>
                <div className={classes.listInfoEven}>
                    <div className={classes.listTitle}>{props.title}</div>
                    <div className={classes.listContent}>{props.content1}<br/><br/>{props.content2}</div>
                    <div className={classes.listButtonDiv}><Button className={classes.listButton}><a href={props.link} target="_blank" rel="noreferrer">{props.button}</a></Button></div>
                </div>
            </div> :
            <div className={classes.list}>
                <div className={classes.listInfoOdd}>
                    <div className={classes.listTitle}>{props.title}</div>
                    <div className={classes.listContent}>{props.content1}<br/><br/>{props.content2}</div>
                    <div className={classes.listButtonDiv}><Button className={classes.listButton} ><a href={props.link} target="_blank" rel="noreferrer">{props.button}</a></Button></div>
                </div>
                <div className={classes.listImageDivOdd}><img src={props.image} alt={`${props.title}_image`} className={classes.listImage}/></div>
            </div>}
            <div className={classes.listMobile}>
                <div className={classes.listInfo}>
                    <div className={classes.listTitle}>{props.title}</div>
                    <div className={classes.listContent}>{props.content1}<br/><br/>{props.content2}</div>
                    <div className={classes.listButtonDiv}><Button className={classes.listButton} ><a href={props.link} target="_blank" rel="noreferrer" className={classes.listA}>{props.button}</a></Button></div>
                </div>
                <div className={classes.listImageDiv}><img src={props.image} alt={`${props.title}_image`} className={classes.listImage}/></div>
            </div>
        <div>

        </div>
        </div>
    );
};

export default ListCard;