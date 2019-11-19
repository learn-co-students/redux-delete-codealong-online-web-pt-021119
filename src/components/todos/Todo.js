import React, { Component }  from 'react';
import { connect } from  'react-redux';

class Todo extends Component {

  render(){
    return(
      <li>
        { this.props.text }
        <button onClick={event => this.props.deleteTodo(this.props.id) }>Done!</button>
      </li>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch({ type: 'DELETE_TODO', id })
})

export default connect(null, mapDispatchToProps)(Todo);
