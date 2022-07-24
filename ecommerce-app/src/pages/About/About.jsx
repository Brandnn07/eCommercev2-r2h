import React from "react";
import "./style.scss";

export default function About() {
    return(
        <div>
            <video autoPlay muted loop id="myVideo">
        <source src={require('../../assests/images/videos/video.mp4')} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      
      </div>
    )
}