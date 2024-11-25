import React, { useContext } from "react";
import {AppContext} from '../Context/AppContext';
import Spinner from './Spinner';
import BlogDetails from "./BlogDetails";

const Blogs = () =>{
    // consume
    const {posts,loading} = useContext(AppContext);
    return(
        <div className="w-[900px] flex flex-col m-auto mt-[60px]">
           {
            loading ? (<Spinner/>) : 
            (
                posts.length === 0 ? (
                <div className="flex justify-center items-start">
                    <p>No posts Found</p>
                </div>) : 
                (posts.map((post) =>(
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
           }
        </div>
    )
}

export default Blogs;