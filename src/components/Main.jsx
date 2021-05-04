import React from "react";
import Social from "./Social";

const Main = ({data :{name, role, email,location, phone, userImage, githubLink,desc,
    linkedInlink}}) => {

    return (
        <section className="intro-section main-bg">
            <div className="inner-text">
                <h1>{name}</h1>
                <h2>{role}</h2> 
            </div>
            <div className="scroll-down">
                <a href="#about">
                    <span></span>
                </a>
            </div>
            <Social github={githubLink} linkedin={linkedInlink} />
            {/* <img src={userImage.asset.url} /> */}
            {/* <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{githubLink}</p>
            <p>{location}</p>
            <p>{linkedInlink}</p> */}
            
        </section>
    )
}
export default Main