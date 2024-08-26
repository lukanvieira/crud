import React, { Fragment } from "react";
import './main.css'
import Header from './header'

const main = props =>
    <Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </Fragment>


export default main