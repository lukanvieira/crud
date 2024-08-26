import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from "react-router-dom";

import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Footer from "../components/template/footer";
import Route from './routes'

const app = props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Route />
            <Footer />
        </div>
    </BrowserRouter>

export default app