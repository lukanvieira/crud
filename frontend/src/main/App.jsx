import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Main from '../components/template/main';
import Footer from "../components/template/footer";

const app = props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React" />
        <Footer />
    </div>

export default app