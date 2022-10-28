import React from "react";
import { Link } from "react-router-dom";


const BlogCard = ({post}) => {
    const PF = "https://keplerlab-b.herokuapp.com/images/";
    console.log(post)
    return (
        <div className="flex justify-center">
            <div className="w-2/3 m-4">
                { post.photo && (
                    <img 
                    className="h-80 object-cover w-full rounded-lg"
                    src={PF + post.photo} 
                    alt="" 
                />
                )
                }
                <div className="text-center text-2xl m-4 truncate" style={{fontFamily: "Poppins", fontWeight:"600"}}>
                    <Link to={`/blog/${post._id}`} className="no-underline text-inherit">{post.title}</Link>
                </div>
                <div className="flex">
                    <Link to={`/blog/?user=${post.username}`} className="no-underline text-inherit" style={{fontFamily: "Poppins", fontWeight:"200"}}>
                        <span className="flex-1">
                            By: {post.username}
                        </span>
                    </Link>
                    { new Date(post.createdAt).toDateString() === new Date(post.updatedAt).toDateString() ? 
                        <span className="flex-1 flex justify-end" style={{fontFamily: "Poppins", fontWeight:"200"}}>
                            {new Date(post.createdAt).toDateString()}
                        </span> :
                        <span className="flex-1 flex justify-end" style={{fontFamily: "Poppins", fontWeight:"200"}}>
                            Updated in: {new Date(post.updatedAt).toDateString()}
                        </span>
                    }
                </div>
                <hr className="my-4"/>
                <p className="my-4"  style={{fontFamily: "Poppins", fontWeight:"200", lineHeight:"2rem"}}>
                    {post.desc.substring(0, 144)}...  
                </p>
            </div>
        </div>
    );
};

export default BlogCard;