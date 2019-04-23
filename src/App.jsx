import React, { Component } from 'react';
import { fetchUser } from './api';

import Message from './Message';
import User from './User';

class App extends Component {
  state = {
    loading: true,
    data: null,
  }

  componentDidMount() {
    fetchUser()
      .then(res => {
        this.setState({
          data: res.data,
          loading: false,
        });
      })
      .catch(e => this.setState({ loading: false }));
  }

  render() {
    const { loading, data } = this.state;

    if(loading) {
      return <Message type="info" data="Loading..."/>
    }

    return (
      <>
        <h1>Welcome to my GitHub progile page</h1>
        <User data={data} />
      </>
    );
  }
}

export default App;
