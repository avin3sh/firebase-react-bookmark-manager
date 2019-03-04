import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './screens/Home';
import NewBookmark from './screens/NewBookmark';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={NewBookmark} />
        </div>
      </Router>
    )
  }
}

export default App;