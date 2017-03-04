import ReactDOM from 'react-dom';
import React from 'react';
import Api from '../utils/api';

class Actions extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      actions: []
    };
    this.getData();
  }

  async getData() {
    this.setState({
      actions: (await Api.getActions()).data
    });
  }

  render(){
    console.log('actions response', this.state.actions);
    return (
        <div>Actions</div>
    );
  }
};

export default Actions;