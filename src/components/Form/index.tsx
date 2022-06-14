import React from 'react';
import Button from '../Buttton';
import './style.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What we're going to study today?"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="name"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
