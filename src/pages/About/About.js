import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header.js";
import InputForm from "../../components/InputForm/InputForm";
import aboutImage from '../../assets/team.png';


import classes from './About.module.css';


const About = props => {
    return (
        <div>
            <Header
            className={classes.clicked}
            id = '1'
            />
            <div className={classes.innerContent}>
                <div className = {classes.aboutTitle}>Who are we?</div>
                <div className = {classes.aboutIntro}>Keplerlab Co. Ltd. founded in 2022. CEO, Younghoon Cho, MD., who is Korean otorhinologist decided to adopt global software engineering with Ethiopian developers into Korea. Dr. Cho started this company in order to help software developers they are in trouble due to civil war in Ethiopia. Keplerlab Co. Ltd. start with Kibrom Hailu from Ethiopia who has experiences with business in Ethiopia, nowadays Keplerlab has 9 software developers and additional 3 new members, from all over the world - Seoul, Dubai and Addis Ababa.</div>
                <div className = {classes.aboutContent}>
                    <div className = {classes.aboutImgDiv}>
                        <img
                        src={aboutImage}
                        alt="about_img"
                        className = {classes.aboutImg}
                        />
                    </div>
                    <div className = {classes.aboutDescription}>
                        <div className={classes.aboutDescriptionInner}>
                            <div className={classes.title}>KeplerLab’s Internal Vision</div>
                            <ol>
                                <li className={classes.point}>Ownership</li>
                                <ul><li>Everyone here is the owner of Kepler Lab.</li></ul>
                                <li className={classes.point}>Efficiency</li>
                                <ul><li>Our Team is efficent</li></ul>
                                <li className={classes.point}>Problem Obsession</li>
                                <ul><li>As we go along, there will be a number of things that are not clear. How we solve these problems is by obsessing over the problems and finding solutions to the problems</li></ul>
                                <li className={classes.point}>Share</li>
                                <ul><li>Everyone should share everything that we are all working on and the issues we all face in our private lives so that we can all help each other.</li></ul>
                                <li className={classes.point}>Celebrate Progress</li>
                                <ul><li>Whenever we achieve good progress, we should celebrate each other.</li></ul>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <InputForm page="about" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
            <Footer page="about"/>
        </div>
    );
};

export default About;
