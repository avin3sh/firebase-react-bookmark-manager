import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase, { auth, } from '../../configs/firebase';

import Sidebar from '../Sidebar';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: null,
            showSidebar: false,
            height: window.innerHeight,
            width: window.innerWidth,
        }
    }

    login = async () => {
        await auth.signInAnonymously();
    }


    componentDidMount() {
        this.login();

        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });

        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    handleResize = () => this.setState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    render() {

        return (
            <div style={{ flex: 1 }}>
                <div className="topMenu">
                    <span className="topMenuButton" onClick={this.toggleSidebar}>☰</span>
                </div>
                <div className="appContainer">
                    {this.state.user && (
                        <div className="pageContainer" style={{ height: this.state.height, width: this.state.width }}>
                            <div className="appSidebar" style={this.state.showSidebar ? { position: 'absolute', zIndex: 99, minWidth: 150, maxWidth: 300, display: 'flex', height: window.innerHeight } : null}>
                                <Sidebar uid={this.state.user.uid} />
                            </div>
                            <div className="appContent">{this.props.children}</div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
