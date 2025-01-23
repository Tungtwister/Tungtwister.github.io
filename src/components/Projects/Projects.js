import React from "react";
import mock05 from '../../Assets/CroiClip.jpg';
import '../Projects/Projects.css';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><h2>Croissant the Corgi</h2></a>
                <p>Croissant is my dog</p>
            </div>
            <div className="project">
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><h2>Croissant the Corgi</h2></a>
                <p>Croissant is my dog</p>
            </div>
            <div className="project">
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><h2>Croissant the Corgi</h2></a>
                <p>Croissant is my dog</p>
            </div>
            <div className="project">
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/croissant.the.corgi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><h2>Croissant the Corgi</h2></a>
                <p>Croissant is my dog</p>
            </div>
        </div>
    </div>
    );
}

export default Project;