import React, { useState, useEffect } from "react";
import Button from "../../UI/Button/Button";
import emailjs from '@emailjs/browser';

import classes from './InputForm.module.css';


const InputForm = props => {

//    const [fullName, setFullName] = useState('');
//    const [email, setEmail] = useState('');
//    const [message, setMessage] = useState('');
   const [status, setStatus] = useState ('');

//    const handleFullName = event => {
//     setFullName(event.target.value);
//    }
//    const handleEmail = event => {
//     setEmail(event.target.value);
//    }
//    const handleMessage = event => {
//     setMessage(event.target.value);
//    }
console.log(props.serviceId);
console.log(props.templateId);
console.log(props.publicKey);
   function sendEmail(e) {
       e.preventDefault();

       emailjs.sendForm(
            `${props.serviceId}`,
            `${props.templateId}`,
           e.target,
           `${props.publicKey}`
           ).then(res=>{
               console.log(res);
               setStatus('SUCCESS');
           }).catch(err=> console.log(err));
           e.target.reset()

   }
   useEffect(() => {
     if(status === 'SUCCESS') {
       setTimeout(() => {
         setStatus('');
       }, 3000);
     }
   }, [status]);
    
    return (
        <div className={classes.inputform}>
            <div className={classes.encloser}>
                {
                props.page !== "contact" && 
                <div>
                    <div className={classes.title }>Let's Talk</div>
                    <div className={classes.description}>Contact us for any inquiry you may have</div>
                </div>
                }
                <form onSubmit={sendEmail} className={classes.form}>
                    <div className={classes.personalInfo}>
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" name="name" placeholder="John Doe" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="user_email" placeholder="john@example.com" required/>
                        </div>
                    </div>
                    <div className={classes.submitInfo}>
                        <div className={classes.submitInfoTitle}><label id="message">Message</label></div>
                        <div className={classes.submitInfoMessage}><textarea id="message" name="message" placeholder="Hello..." required/></div>
                        <div className={classes.submitInfoButtonDiv}><Button type="submit" className={classes.submitInfoButton}>Submit</Button></div>
                    </div>  
                </form>
            </div>
            
        </div>
    );
};

export default InputForm;