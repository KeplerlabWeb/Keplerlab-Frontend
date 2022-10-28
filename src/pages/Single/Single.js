import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import InputForm from '../../components/InputForm/InputForm';

export default function Single() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "https://keplerlab-b.herokuapp.com/images/";

    useEffect(()=>{
        const getPost = async () =>{
         const res = await axios.get("/posts/"+ path);
         setPost(res.data);
        };
        getPost();
    },[path]);

  return (
    <div>
        <Header/>
        <div className="flex justify-center">
            <div className="w-9/12 m-4">
                {
                    post.photo && (
                        <img 
                    src={PF + post.photo} 
                    alt="" 
                    className="h-80 object-cover w-full rounded-lg" 
                />
                    )
                }
                <div className="flex">
                    <div className="flex-1 text-center font-KanumruyPro_Bold text-4xl m-4" style={{fontFamily: "Poppins", fontWeight:"600"}}>
                        {post.title}
                    </div>
                </div>
            
                <div className="flex">
                    <span className="flex-1 text-lg m-4" style={{fontFamily: "Poppins", fontWeight:"400"}}>
                        Author:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b className="m-2 text-[#FFD700]">{post.username}</b>
                    </Link>    
                    </span>
                    { new Date(post.createdAt).toDateString() === new Date(post.updatedAt).toDateString() ? 
                            <span className="flex-1 flex justify-end m-4 text-lg" style={{fontFamily: "Poppins", fontWeight:"200"}}>
                                {new Date(post.createdAt).toDateString()}
                            </span> :
                            <span className="flex-1 flex justify-end text-lg m-4" style={{fontFamily: "Poppins", fontWeight:"200"}}>
                                Updated in: {new Date(post.updatedAt).toDateString()}
                            </span>
                        }
                </div>
                <p className="font-KanumruyPro_Bold text-xl m-4" style={{whiteSpace: "pre-wrap", fontFamily: "Poppins", fontWeight:"200", lineHeight:"2rem"}} >
                    {post.desc}
                </p>
                {post.link &&
                <div className="flex justify-center">
                    <div className="bg-[#01385E] p-4 w-full text-lg m-4 text-white text-center rounded-lg hover:bg-[#1fc600] cursor-pointer w-48"><a href={post.link} target="_blank" rel="noreferrer" className="text-inherit undeline-none">Go to Source</a></div>
                </div>
                }
                
            </div>
            </div>
            <InputForm page="blog" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
        <Footer/>
    </div>
  )
}
