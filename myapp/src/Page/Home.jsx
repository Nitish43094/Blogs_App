import React from "react";
import Bloges from "../components/Blogs";
import Pagenation from "../components/Pagenation";
import Headers from "../components/Headers";

const Home = () => {
    return (
        <div>
            <Headers />
            <Bloges />
            <Pagenation />
        </div>
    )
}

export default Home;