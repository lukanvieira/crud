import React from "react";
import { Link } from "react-router-dom";

const item = props => 
    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>

export default item