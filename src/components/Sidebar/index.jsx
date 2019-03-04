import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    render() {
        const THIS_URL = String(window.location.href);
        return (
            <div className="sidebarMenu">
                <Link id="sidebarMenuHome" to="/">Home</Link>
                <Link className="sidebarMenuItem" to="/new" style={ THIS_URL.includes('/new') ? activeLink : null}>Add New</Link>
                <Link className="sidebarMenuItem" to="#">Default</Link>
                <Link className="sidebarMenuItem" to="#">Favorite</Link>
            </div>
        )
    }
}

const activeLink = {
    color: '#333333',
    backgroundColor: '#ffff82',
}