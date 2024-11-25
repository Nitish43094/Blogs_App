import React from "react"; 
import Headers from "../components/Headers";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagenation from "../components/Pagenation";

const CategoryPage = () =>{
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
    return(
        <div>
            <Headers/>
            <div>
                <button onClick={()=> navigation(-1)}>
                    Back
                </button> 
                <h2>
                    Bloges On <span>{category}</span>
                </h2>  
            </div>
            <Blogs/>
            <Pagenation/>
        </div>
    )
}

export default CategoryPage;
