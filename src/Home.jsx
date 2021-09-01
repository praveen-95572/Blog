import React from "react";
import Common from "./Common";
import web from "../src/images/home.jpg";

const Home = () =>{

    return (
        <>
            <Common 
            name="Grow your Knowledge with" 
            imgsrc={web} 
            visit="/service" 
            btname="Get Started" 
            />
        </>
      );
};

export default Home;