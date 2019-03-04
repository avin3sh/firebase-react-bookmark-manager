import React, { Component } from 'react';

import AppContainer from '../../components/AppContainer';
import firebase, { db, auth } from '../../configs/firebase';

import BookmarkCard from '../../components/BookmarkCard';

import './style.css';

export default class index extends Component {

    state = {
        listname: this.props.match.params.listname,
        uid: null,
        data: [],
        filtered_data: [],
        fetched: false,
        filter_query: '',
        bookmark_sort: 'default',
        view_type: 'card'
    }

    componentDidMount() {
        this.getBookmarks();
    }

    getUid = () => {
        return new Promise((resolve, reject) => {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ uid: user.uid }, () => resolve(true));
                }
            });
        })
    }

    getBookmarks = () => {

        this.getUid()
            .then((done) => {
                db.collection(String(this.state.uid)).doc('bookmarks').collection('allBookmarks').where('bookmark_category', '==', String(this.state.listname)).get()
                    .then((querySnapshot) => {
                        const DATA = []
                        querySnapshot.forEach(function (doc) {
                            const record = doc.data().record;
                            record.id = doc.id;
                            DATA.push(record);
                            console.log(doc.data())
                        });
                        this.setState({ fetched: true, data: DATA, filtered_data: DATA });
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
            })
    }

    handleFilterQuery = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const ALL_DATA = this.state.data;
        let filtered_data;
        if (value.trim().length == 0) {
            filtered_data = ALL_DATA;
        } else {
            filtered_data = ALL_DATA.filter(bookmark => String(bookmark.bookmark_url + bookmark.bookmark_note).includes(value));
        }

        this.setState({
            [key]: value,
            filtered_data: filtered_data
        })
    }

    handleSort = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        const ALL_DATA = this.state.data;
        let filtered_data = ALL_DATA;


        switch (value) {
            case 'latest':
                filtered_data.sort(function (a, b) {
                    return b.bookmark_time - a.bookmark_time;
                })
                break;
            case 'oldest':
                filtered_data.sort(function (a, b) {
                    return a.bookmark_time - b.bookmark_time;
                })
                break;
            default: filtered_data = ALL_DATA;
        }

        this.setState({
            [key]: value,
            filtered_data: filtered_data
        })


    }

    handleView = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <AppContainer>
                {!this.state.fetched && <span>Please wait while we get your Bookmarks...</span>}
                {this.state.fetched && this._renderFilterBar()}
                <div className={this.state.view_type === 'card' ? 'bookmarkCardContainer' : 'bookmarkListContainer'} >
                    {this.state.fetched && (
                        this.state.filtered_data.map((bookmark, index) => {
                            return <BookmarkCard bookmark={bookmark} key={index} viewType={this.state.view_type} />
                        })
                    )}
                </div>
            </AppContainer>
        )
    }

    _renderFilterBar() {
        return (
            <div className="filterBar">
                <input type="text" name="filter_query" value={this.state.filter_query} onChange={this.handleFilterQuery} placeholder={'Enter your filter keyword'} />
                <div style={{ flexDirection: 'row', marginLeft: 3 }}>
                    <span>Sort by</span>
                    <select name="bookmark_sort" value={this.state.bookmark_sort} onChange={this.handleSort}>
                        <option value="default">Default</option>
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
                <select name="view_type" value={this.state.view_type} onChange={this.handleView} style={{ marginLeft: 5 }}>
                    <option value="card" selected={true}>card view</option>
                    <option value="list">list view</option>
                </select>
            </div>
        )
    }
}
