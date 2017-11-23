import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getChatLog } from './messages/actions';
import { getUsers } from './users/actions';

import './App.css';
import MessageListContainer from './messages/MessageListContainer'
class App extends Component {
  componentDidMount() {
    this.props.getChatLog();
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <MessageListContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getUsers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
