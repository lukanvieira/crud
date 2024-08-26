import React from "react";
import './nav.css'
import Item from './NavItems'

const navg = props => 
    <aside className="menu-area">
        <nav className="menu">
            <Item icon="home" title="Início" link="/" />
            <Item icon="users" title="Usuário" link="/users" />
        </nav>
    </aside>

export default navg