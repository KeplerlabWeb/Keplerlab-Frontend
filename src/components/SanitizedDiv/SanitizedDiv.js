import parse from "html-react-parser";


import classes from './SanitizedDiv.module.css';

function SanitizedDiv(props) {
    return (
        <div className={classes.container}>
            {parse(props.text)}
        </div>
    );
}

export default SanitizedDiv;