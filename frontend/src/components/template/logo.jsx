import React from "react";
import './logo.css'
import picture from "../../assets/imgs/logo.png"

const logo = props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={picture} alt="logo" />
        </a>
    </aside>

export default logo