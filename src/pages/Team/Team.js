import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import InputForm from "../../components/InputForm/InputForm";
import software from '../../assets/software.svg';
import business from '../../assets/business.svg';
import sales from '../../assets/sales.svg';
import ListCard from "../../UI/Card/List/ListCard";


import classes from './Team.module.css';

const TeamList = [
    {
        id:2,
        title: "Software Development",
        image: software,
        content1: "We are the software Development Team",
        content2:"KeplerLab's software development team is composed of developers that have specific roles in mobile app, frontend and backend developments. Each developer is given an opportunity to become a leader through a unique way of approaching projects and last but not least all members of development team are highly skilled developers with their own skill sets."
    },
    {
        id:3,
        title: "Business Development",
        image: business,
        content1: "We are the Business Development and Partnerships Team.",
        content2: "Kepler lab co.ltd is on the strong bondage connection and we're leading the charge into the next radical growth phase. We spend our good energy , time creating strategic  partnerships and working with some of the most successful companies to connect people to the brands they love and creating huge job opportunity  . There's never been a more exciting time to explore business careers with kepler lab co.ltd and set the future in motion."
    },
    {
        id:4,
        title: "Sales",
        image: sales,
        content1: "We are the sales Team",
        content2:"KeplerLab's sales team is tasked with product sales and sales management at the point of contact between customers and markets. Specific tasks include establishing a sales plan, managing sales activities and performance, managing customers and trading lines, and developing new markets. As a sales team entrusted with such an important task, we are doing our very best to meet customer needs and solve their problems."
    },
];

const Team = props => {

    return (
        <div>
         <Header
            className={classes.clicked}
            id = '2'
        />
         <div className={classes.innerContent}>
                <div className = {classes.teamsTitle}>Our Teams</div>
                <div className = {classes.teamsIntro}>The team is structred in the a way that is efficent. There is the development team dealing with the development issues, business team dealing with the business side of the company and last but not least the sales team dealing with the marketing of the comnpay products.</div>
                <div className = {classes.teamsContent}>
                    {
                        TeamList.map(Team => 
                        <ListCard
                        title={Team.title}
                        id={Team.id}
                        content1={Team.content1}
                        content2={Team.content2}
                        image={Team.image}
                        />)
                    }

                </div>
        </div>
        <InputForm page="teams" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
        <Footer/>
        </div>
    );
};

export default Team;