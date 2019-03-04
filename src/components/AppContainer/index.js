import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase, { auth, } from '../../configs/firebase';

import Sidebar from '../Sidebar';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: null
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
    }

    render() {
        return (
            <div style={{ flex: 1 }}>
                <div className="appContainer" firebase={firebase}>
                    <div className="pageContainer" style={{ height: window.innerHeight - 20 }}>
                        <div className="appSidebar" uid={this.state.user.uid}><Sidebar /></div>
                        <div className="appContent" uid={this.state.user.uid}>{this.state.user ? this.props.children : <span>...</span>}</div>
                    </div>
                </div>
            </div>
        )
    }
}
