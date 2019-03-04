import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './screens/Home';
import NewBookmark from './screens/NewBookmark';
import Bookmarks from './screens/Bookmarks';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={NewBookmark} />
          <Route path="/list/:listname"  exact component={Bookmarks} />
        </div>
      </Router>
    )
  }
}

export default App;