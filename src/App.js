import React, { Component } from "react";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

import { connect } from "react-redux";

//using it for the connect
//and connect shoud used outside of the class
const mapStateToProps = state => {
  return {
    authorsMap: state.authors
  };
};
class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.addAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authorsMap} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
