import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDos from './ToDos';

export class ToDoItem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    );
  }
}

//PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default ToDoItem;