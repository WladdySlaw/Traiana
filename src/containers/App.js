import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form';

class App extends Component {
  constructor(props){ 
    super(props);   
    this.state = { 
        count: 0
    };
  }

  createForm(){
      this.setState({
         count: this.state.count +1
      });
  }
  
  render() {

    let forms = [];
    for (let i = 0; i < this.state.count; i += 1) {
        forms.push(<Form key={i} />);
    }

    return (
      <div className="container"> 
        <h2 className="c-title text-center wow fadeInDown">Traiana Test Task</h2>
        <div className="wow fadeInDown">
          <button className="c-btn center" onClick={this.createForm.bind(this)}>Create Form</button>
        </div>
        {forms}
      </div>
    );
  }
}

export default connect(

)(App);
