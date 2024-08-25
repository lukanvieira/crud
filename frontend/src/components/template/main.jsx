import React, { Fragment } from "react";
import './main.css'
import Header from './header'

const main = props => 
    <Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </Fragment>


export default main