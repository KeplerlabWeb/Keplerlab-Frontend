import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import InputForm from "../../components/InputForm/InputForm";


import classes from './Blog.module.css';
import BlogCard from "../../UI/Card/Blog/BlogCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Blog = props => {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
          const res = await axios.get("/posts"+ search);
          setPosts(res.data);
        }
        fetchPosts();
      },[search])


    return (
        <div>
            <Header
                className={classes.clicked}
                id = '5'
                />
                <div className="text-4xl text-[#003459] m-4 mt-8 text-center" style={{fontFamily:"Poppins", fontWeight:"600"}}>Blogs</div>
                <div className="grid m-4 lg:grid-cols-2 gap-1 grid-cols-1">
                {
                    posts.slice(0).reverse().map( post => { return (
                    <BlogCard key={post._id} post={post}/>
                    )
                    
                    })
                }
                </div>
                <InputForm page="blog" templateId="template_tbyoysp" serviceId="service_c8ki4nd" publicKey="-A1J_BPYvSOWeNzxH"/>
            <Footer/>
        </div>
    );
};

export default Blog;