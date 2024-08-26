import React from "react";
import './logo.css'
import picture from "../../assets/imgs/logo.png"
import { Link } from "react-router-dom";

const logo = props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={picture} alt="logo" />
        </Link>
    </aside>

export default logo