import React, { Component } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';

import './style.css';

import AppContainer from '../../components/AppContainer';

import firebase, { auth, db } from '../../configs/firebase';
import { write } from 'fs';

const LISTS = [
    { value: 'default', label: 'default' },
];

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookmark_url: '',
            bookmark_list: ['Default'],
            bookmark_note: '',
            new_bookmark_list: '',
            uid: null,
            saving: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    uid: user.uid
                })
            }
        });
    }

    handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({ [key]: value })
    }

    handleListSelect = (selectedOption) => {
        this.setState({
            bookmark_list: selectedOption
        });
    }

    save = () => {
        const data = {
            bookmark_url: this.state.bookmark_url,
            bookmark_list: this.state.bookmark_list,
            bookmark_note: this.state.bookmark_note,
            bookmark_time: new Date().getTime(),
        }

        this.writeToDb(data);
    }

    writeToDb = (data) => {
        const TOTAL_CATEGORIES = data.bookmark_list.length;
        let CATEGORIES_WRITTEN = 0;

        this.setState({ saving: true });

        const record = {
            bookmark_url: data.bookmark_url,
            bookmark_note: data.bookmark_note,
            bookmark_time: data.bookmark_time
        }

        data.bookmark_list.map(category => {
            db.collection(this.state.uid).doc('bookmarks').collection(category.value).add(record)
                .then((docRef) => {
                    CATEGORIES_WRITTEN++;
                    if (CATEGORIES_WRITTEN === TOTAL_CATEGORIES) this.handleSuccess();
                })
        })

    }

    handleSuccess = () => {
        alert('Bookmark saved!');
        window.location.reload();
    }

    render() {
        return (
            <AppContainer>
                <div className="newBookmarkForm">
                    <h2 className="pageTitle">Add New Bookmark</h2>
                    <input type="text" name="bookmark_url" placeholder="URL of bookmark" value={this.state.bookmark_url} onChange={this.handleInput} />

                    <CreatableSelect
                        defaultValue={LISTS[0]}
                        isMulti
                        name="bookmark_list"
                        options={LISTS}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={this.handleListSelect}
                        placeholder="Bookmark List category"
                    />

                    <textarea name="bookmark_note" placeholder="Add additional notes..." value={this.state.bookmark_note} onChange={this.handleInput} />
                    <button onClick={this.save}>Save</button>
                    {this.state.saving && <span>Please wait...</span>}
                </div>
            </AppContainer>
        )
    }
}
