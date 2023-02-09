import React from "react";

const About = (props) => {
    return (
        <>
            <h1 className={` bg-${props.mode} text-${props.textMode} `}>About Page</h1>
        </>
    );
}
export default About;