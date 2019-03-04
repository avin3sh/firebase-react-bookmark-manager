import React, { Component } from 'react'

import './style.css';

const IMG_PLACEHOLDER = "https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg";

export default class index extends Component {

    state = {
        is_favorite: this.props.bookmark.bookmark_isfavorite,
    }

    render() {
        const bookmark = this.props.bookmark;
        return (
            <div>
                {this.props.viewType === 'card' && (
                    <div className="bookmarkCard">
                        <div className="bookmarkImage"><img src={IMG_PLACEHOLDER} style={{ width: '100%' }} /></div>
                        <span className="bookmarkTitle"></span>
                        <span className="bookmarkUrl"><a href={bookmark.bookmark_url} target="_blank" rel="noopener noreferrer" className="cardUrl">{bookmark.bookmark_url}</a></span>
                        <span className="bookmarkNote">{bookmark.bookmark_note}</span>
                        <div className="cardButtons">
                            <button style={this.state.is_favorite ? { backgroundColor: '#fffd00' } : null} onClick={() => {
                                this.setState({ is_favorite: !this.state.is_favorite });
                            }}>Favorite</button>
                            <button disabled={true}>Archive</button>
                            <a href={bookmark.bookmark_url} target="_blank" rel="noopener noreferrer" className="cardUrlBtn"><button>Open</button></a>
                        </div>
                    </div>
                )}

                {this.props.viewType === 'list' && (
                    <div class="bookmarkListContainer">
                        <div className="bookmarkList">
                            <span className="list-bookmarkDate">{new Date(bookmark.bookmark_time).toDateString()}</span>
                            <span className="list-bookmarkUrl"><a href={bookmark.bookmark_url} target="_blank" rel="noopener noreferrer" className="cardUrl">{bookmark.bookmark_url}</a></span>
                            <span className="list-bookmarkNote">{bookmark.bookmark_note}</span>
                        </div>
                    </div>

                )}

            </div>

        )
    }
}

