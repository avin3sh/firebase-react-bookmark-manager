import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase, { db } from '../../configs/firebase';

export default class index extends Component {

    state = {
        uid: this.props.uid,
        fetched: false,
        categories: [],
        url: String(window.location.href)
    }

    getListCategories = () => {

        const AVAILABLE_CATEGORIES = [];

        db.collection(String(this.state.uid)).doc('bookmarks').collection('bookmarkCategories').get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    AVAILABLE_CATEGORIES.push(doc.data().category_name);
                });
                this.setState({
                    fetched: true,
                    categories: AVAILABLE_CATEGORIES
                })
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {

            })

    }

    componentDidMount() {
        this.getListCategories();
    }

    render() {
        return (
            <div className="sidebarMenu">
                <Link id="sidebarMenuHome" to="/">Home</Link>
                <Link className="sidebarMenuItem" to="/new" style={this.state.url.includes('/new') ? activeLink : null}>Add New</Link>
                {!this.state.fetched && <span>...</span>}
                {this.state.fetched && this._renderCategories()}
            </div>
        )
    }

    _renderCategories = () => {
        return this.state.categories.map((category, index) => {
            return (
                <a key={index} className="sidebarMenuItem" href={'/list/' + category} style={this.state.url.includes('/' + category) ? activeLink : null} >{category}</a>
            )
        })
    }
}

const activeLink = {
    color: '#333333',
    backgroundColor: '#ffff82',
}