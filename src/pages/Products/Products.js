import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import InputForm from "../../components/InputForm/InputForm";
import qagnew from '../../assets/qagnew_home.png';
import arrange from '../../assets/arrange_1.png';
import readmyface from '../../assets/readmyface_home.png';


import classes from './Products.module.css';
import ListCard from "../../UI/Card/List/ListCard";

const givenProducts = [
    {
        id:1,
        title: "Qagnew",
        image: qagnew,
        content: "A platform intended to connect highly skilled and affordable Ethiopian software developers with Korean IT companies that are looking for talented developers. Qagnew is destined to solve the chronic developer shortage that is strangling the Korean IT sector as well as open up new horizons and opportunities for talented Ethiopian developers. Given the strong historic connection between Ethiopia and Korea, Qagnew will build on that and achieve magnificent results.",
        link:"https://qagnew.com"
    },
    {
        id:2,
        title: "Arrange",
        image: arrange,
        content: "An app based solution where multiple users can arrange and manage virtual and in-person meetings automatically. Arrange is designed to take the difficulty out of setting up meetings among team members who in some case are dispersed across different timezones. Your time is precious and Arrange will help you save more of it by helping you optimize your day to day life.",
        link:"https://arrangeapp.info"
    },
    {
        id:3,
        title: "ReadMyFace",
        image: readmyface,
        content: "Powered by the world-best AI engines, ReadMyFace is a fun app where users upload their photos and get an instant reading of their faces with Korean traditions. ReadMyFace is exclusively an entertainment platform that will for sure put a smile on a user's face during a busy day. Try it out, it only takes 3mins.",
        link:"https://readmyface.co"
    },
];

const Products = props => {

    return (
        <div>
         <Header
            className={classes.clicked}
            id = '3'
        />
         <div className={classes.innerContent}>
                <div className = {classes.productsTitle}>Our Products</div>
                <div className = {classes.productsIntro}>Keplerlab has three products that are avilable to the consumers. Arrange, which is an intuitive meeting and appointments scheduling software. Qagnew, which is an ethiopian developers recruting software and Readmyface, an entertainment platform.</div>
                <div className = {classes.productsContent}>
                    {
                        givenProducts.map(product => 
                        <ListCard
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        content1={product.content}
                        link={product.link}
                        button="read more..."
                        />)
                    }
                </div>
        </div>
        <InputForm page="products" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
         <Footer/>
        </div>
    );
};

export default Products;