import React from "react";
import { useRef } from 'react';
import {AiFillTwitterCircle,AiFillFacebook,AiFillYoutube,AiFillGithub,AiFillInstagram } from "react-icons/ai";
import {FaFacebook } from "react-icons/fa";
import './social_media.styles.scss';

//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>

export default function Social_Media() {

    const navRef = useRef();

    const showLinksbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    
        <div class="icons">
        <a href="https://www.facebook.com/profile.php?id=100071684676131&mibextid=LQQJ4d" class="fb" target="_blank"><i><FaFacebook/></i></a>
        <a href="#" class="twitter"><i><AiFillTwitterCircle/></i></a>
        <a href="https://instagram.com/metaroyale0301_official?igshid=YmMyMTA2M2Y=" class="insta" target="_blank"><i><AiFillInstagram/></i></a>
        {/*<a href="#" class="git"><i><AiFillGithub/></i></a>*/}
        <a href="https://www.youtube.com/watch?v=pQqShhLR4PI" class="yt" target="_blank"><i><AiFillYoutube/></i></a>
      </div>
    )
}