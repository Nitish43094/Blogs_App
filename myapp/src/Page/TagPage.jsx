import React from "react";
import { useLoaderData, useLocation, useNavigate} from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagenation from "../components/Pagenation";
import Headers from "../components/Headers";

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div>
            <Headers />
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagenation />
        </div>
    )
}

export default TagPage;