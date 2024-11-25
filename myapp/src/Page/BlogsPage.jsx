import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { baseUrl } from "../baseUrl";
import Headers from '../components/Headers';
import BlogDetails from "../components/BlogDetails";

const BlogsPage = () => {
    const newUrl = "https://codehelp-apis.vercel.app/api/";
    const { setLoading, loading } = useContext(AppContext);
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRealatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.data);
            setRealatedBlog(data.relatedblogs);
        } catch (error) {
            console.log("This is error in blog id ");
            setBlog(null);
            setRealatedBlog([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])
    return (
        <div>
            <Headers />
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>
            {
                loading ? (<p>loading</p>) :
                    (blog ? (<div>
                        <BlogDetails post={blog} />
                        <h2>Related Blogs</h2>
                        {
                            relatedblogs.map((post) => {
                                <div key={post.id}>
                                    <BlogDetails post={post} />
                                </div>
                            })
                        }
                    </div>) : (<div>No Blog Found</div>)
                    )
            }
        </div>
    )
}

export default BlogsPage;