import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  render() {
    return (
      <form className="c-form wow fadeInUp"> 
          <h2 className="c-form__title">Form Title</h2>

          <div className="c-text">
            <label htmlFor={'input' + new Date().getTime()}>First Input</label>
            <input type="text" id={'input' + new Date().getTime()}/>
          </div>
          <div className="c-text">
            <label htmlFor={'input' + new Date().getTime() + 1}>Second Input</label>
            <input type="text" id={'input' + new Date().getTime() + 1}/>
          </div>

          <div className="c-check">    
            <input type="checkbox" id={'check' + new Date().getTime()}/>
            <label htmlFor={'check' + new Date().getTime()}>First Conditional</label>
          </div>
          <div className="c-check">
            <input type="checkbox" id={'check' + new Date().getTime() + 1}/>
            <label htmlFor={'check' + new Date().getTime() + 1}>Second Conditional</label>
          </div>

          <button className="c-btn center">Submit</button>
      </form>
    );
  }
}

export default connect(

)(Form);