import React from "react";
import './App.css';

import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Main from '../components/template/main';
import Footer from "../components/template/footer";

const app = props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>

export default app