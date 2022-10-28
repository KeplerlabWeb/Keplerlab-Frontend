import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import classes from './Home.module.css';
import MilestoneCard from "../../UI/Card/Milestone/MilestoneCard";
import PopUp from "../../components/PopUp/PopUp";
import Qagnew from "../../assets/qagnew.svg";
import Arrange from '../../assets/Arrange.svg';
import ArrangeH from '../../assets/arrangeH.png';
import readmyface from '../../assets/Readmyface.svg';
import ProjectsCard from "../../UI/Card/Product/ProductsCard";
import asleep from '../../assets/Asleep.png';
import afar from '../../assets/Afar.png';
import ett from '../../assets/Ett.png';
import greatanatomy from '../../assets/greatanatomy.png';
import snapp from '../../assets/snapp.png';
import USIDHR from '../../assets/USIDHR.png';
import world from '../../assets/World.png';
import onemore from '../../assets/One more.png';
import CFPO from '../../assets/CFPA.png';
import Addis from '../../assets/AAU.png';
import little from '../../assets/Littleride.png';
import PartnerCard from "../../UI/Card/Partner/PartnerCard";
import InputForm from "../../components/InputForm/InputForm";
import BlogCard from "../../UI/Card/Blog/BlogCard";
import LiveSessionCard from "../../UI/Card/LiveSession/LiveSessionCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

// const max_size = 165;

const partners = [
    {
        id:1,
        title:"Asleep",
        logo: asleep,
        description:"Asleep Inc. believe that better sleep can change the world. Allowing people to control their sleep will bring greater values."
    },
    {
        id: 2,
        title:"Snapp Study",
        logo: snapp,
        description:"snapp study is the only IBSE Agent in turkey and Malaysia, all almost 90% of the world best universities working with them."
    },
    {
        id:3,
        title:"Ethio Travel and Tours",
        logo: ett,
        description:"Ethio travel and tours(ETT) is the biggest and well operated tour company in Ethiopia. "
    },
    {
        id:4,
        title: "Addis Ababa University",
        logo: Addis,
        description: "Addis Ababa University is a national university located in Addis Ababa, Ethiopia. It is the oldest university in Ethiopia and national rank number one . AAU has thirteen campuses. Twelve of these are situated in Addis Ababa, and one is located in Bishoftu, about 45 kilometres away."
    },
    {
        id:5,
        title:"Afar Ethiopia Tours",
        logo: afar,
        description:"Afar Ethiopia tours are the most well-connected company and have unlimited worldwide company connections."
    },
    {
        id:6,
        title:"USIDHR",
        logo: USIDHR,
        description:"USIDHR provides training in diplomacy, human rights and its humanitarian programs include helping 68 million children go to school."
    },
    {
        id:7,
        title:"World Youth Summit",
        logo: world,
        description:"World youth summit working with, from all over the world, youth ambassadors in order to achieve SDG."
    },
    {
        id:8,
        title:"Little Ride Ethiopia",
        logo: little,
        description:"The Little Taxi Experience Has Been Designed With Your Safety And Security In Mind, As Our Technology Enables Us To Focus On Both The Drivers And Riders."
    },
    {
        id:9,
        title:"Great Anatomy",
        logo: greatanatomy,
        description:"GA(Great Anatomy) is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, for online, at any subject lever of Anatomy."
    },
    // {
    //     id:9,
    //     title:"Center For Peacebuilding Organization",
    //     logo: CFPO,
    //     description:""
    // },
    {
        id:10,
        title:"One More International ",
        logo: onemore,
        description:"One More International; spread over 53 countries, which can service all over the world with personalized shipping, made macro-export to approximately 7 contents"
    },
]

const Projects = [
    {
        id: 1,
        title: 'Qagnew',
        logo: Qagnew,
        content: "Recruit affordable & skilled Ethiopian professionals! We are connecting with Ethiopian software engineers and Korean companies.",
        link:"https://qagnew.com"
    },
    {
        id: 2,
        title: "Arrange",
        logo: Arrange,
        content: "App-solution where multiple users can arrange and manage new meetings automatically. Let's arrange all your schedules in one app.",
        link:"https://arrangeapp.info"
    },
    {
        id: 3,
        title: "Arrange Hospital",
        logo: ArrangeH,
        content: "Patient portal to connect between patients, medical institutes, and digital healthcare solutions. We will secure your health rights for your sleep health.",
        link:"https://arrangeapp.info"
    },
    {
        id: 4,
        title: "ReadMyFace",
        logo: readmyface,
        content: "Powered by the world's best AI. Upload your picture or take a photo and get an instant reading of your face with Korean traditions. It only takes 3 minutes.",
        link:"https://readmyface.co"
    }
]

// const Milestone = [
//     {
//         key:1,
//         number: '4500 USD',
//         title: 'Revenue',
//         content: 'As of yet our revenue stands at 4,500 USD (<100K USD). Thought it might seem small, the fact that KeplerLab is generating revenue in itself is a huge success. Most companies don\'t see any revenue in the first year of their existence so we believe we are on the right track.'
//     },
//     {
//         key:2,
//         number: '4M USD',
//         title: 'Valuation',
//         content: 'KeplerLab is currently valued at 4M USD. It was at this valuation that KeplerLab secured seed investment on August 2022. On its current trajectory, KeplerLab\'s growth metrics indicate that we will achieve hundreds of millions in market cap in the coming couple of years.'
//     },
//     {
//         key:3,
//         number: '13',
//         title: 'Crews',
//         content: 'KeplerLab was launched with only six members in April 2022. We have grown to 13 employees in a few short months. KeplerLab\'s team is spread across two continents and three countries - Seoul, Dubai and Addis Ababa. We work remotely but stay very closely connected to each other.',
//     },
// ];

const Home = props => {
    const [idValue, setIdValue]= useState(0);
    const [arrangeH, setArrangeH] = useState(false);

    // const [readMore, setReadMore] = useState(false);
    const [partnerDetail, setPartnerDetail] = useState(false);

    // const HandleReadmore = event => {
    //     setReadMore(true);
    //     setIdValue(() => {return (parseInt(event.target.id)-1)})
    // };
    // const HandleReadless = event => {
    //     setReadMore(false);
    // }

    const HandleOpenPartnerDetail = event => {
        setPartnerDetail(true);
        setIdValue(() => {return (parseInt(event.target.id)-1)})
    };
    const HandleClosePartnerDetail = event => {
        setPartnerDetail(false);
        setArrangeH(false);
    }

    const HandleArrangeHClicked = event => {
        setArrangeH(true);
    }

    const [mileStones, setMileStones] = useState([]);
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res = await axios.get("/posts" + search);
            setPosts(res.data);
        }
        fetchPosts();
        const fetchMilestones = async ()=>{
        const res = await axios.get("/milestones"+ search);
            setMileStones(res.data);
        }
        fetchMilestones();
    },[search])


    // const NewMilestone = Milestone.map((val) => { return {
    //     ...val,
    //     content: val.content.slice(0, max_size)
    // }});
    return (
        <div>
            
            <Header page="home"/>
            <Hero/>
            {/* {readMore && <PopUp handleClick={HandleReadless} title={Milestone[idValue].title} content={Milestone[idValue].content} value="read less.." className={classes.PopButtonMilestone}/>} */}
            {arrangeH && <PopUp handleClick={HandleClosePartnerDetail} title={Projects[1].title} content="Coming soon on December 2022!" value="close" className={classes.PopButtonPartner}/>}
            {partnerDetail && <PopUp handleClick={HandleClosePartnerDetail} title={partners[idValue].title} content={partners[idValue].description} value="close" className={classes.PopButtonPartner}/>}
            <div className={classes.home}>
                <div className={classes.milestoneTitle}><strong>Milestone</strong></div>
                <div className={classes.milestones}>
                    {
                        mileStones.map(milestone => 
                        <MilestoneCard
                        key={milestone._id} 
                        milestone={milestone}
                        />)
                    }
                </div>
                <div className={classes.projectTitle}><strong>Products</strong></div>
                <div className={classes.projects}>

                    {
                        Projects.map(project => 
                        <div className={classes.projectCard}>
                            <ProjectsCard
                            key={project.id}
                            logo={project.logo}
                            title={project.title}
                            content={project.content}
                            link={project.link}
                            wasClicked={HandleArrangeHClicked}
                            />
                        </div>)
                    }

                </div>
                <div><LiveSessionCard/></div>
                <div className={classes.partnerTitle}><strong>Partners</strong></div>
                <div className={classes.partners}>
                    {
                        partners.map(partner => 
                        <PartnerCard
                        key={partner.id}
                        id={partner.id}
                        title={partner.title}
                        logo={partner.logo}
                        onClick={HandleOpenPartnerDetail}
                        />)
                    }
                </div>
                <div className={classes.blogTitle}><strong>Blogs</strong></div>
                    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                    {
                        posts.slice(0, 4).reverse().map(post => 
                        <BlogCard
                        key={post._id} 
                        post={post}
                        />)
                    }
                    </div>
                <InputForm page="about" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Home;