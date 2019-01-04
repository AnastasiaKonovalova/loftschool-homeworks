import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

export default class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  };

  createNewRecordByEnter = event => {};

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    return (
      <Card title='Список дел'>
        <div className='todo t-todo-list'>
          <div className='todo-item todo-item-new'>
            <input 
              className='todo-input t-input' 
              placeholder='Введите задачу' 
              onChange={this.handleChange}
              value={this.state.inputValue}
            />
            <span className='plus t-plus'>+</span>
          </div>
          <div className='todo-item t-todo'></div>
        </div>
      </Card>
    )
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
