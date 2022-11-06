import React from "react";
import "./Footer.css"
 import { AiFillFacebook } from 'react-icons/ai'
 import { AiFillGithub } from 'react-icons/ai'
 import { AiFillInstagram } from 'react-icons/ai'
 import { AiFillLinkedin } from 'react-icons/ai'
 import { AiFillYoutube } from 'react-icons/ai'


const Footer=()=>{
    return (
        <>
        <div className="bgImage3">
            <div className="partners">
                <div className="partner">Our Partners</div>
                <div>FENIX</div>
                <div>NEOLITH</div>
                <div>KESSEBOHMER</div>
                <div>BLUM</div>
                <div>CASESARSTONE</div>
            </div>
            <div className="logoname">
                <div className="logo1">dona</div>
                <div className="about">
                    <div>About Us</div>
                    <div>Blog</div>
                    <div>Contact us</div>
                    <div>Gallery</div>
                    <div>Home Page</div>
                </div>
                <div className="kitchen">
                    <div>Kitchens</div>
                    <div>Our Partner</div>
                    <div>Wardrobes</div>
                </div>
                <div className="icon">
                    <AiFillGithub />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                    <AiFillFacebook />
                </div>
            </div>
        </div>

        </>
    )
}
export default Footer