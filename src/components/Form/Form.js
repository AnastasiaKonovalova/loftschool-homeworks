import React, {Component} from 'react'
import bond from './assets/bond_approve.jpg';
import './Form.css';
import AuthField from '../AuthField';
import Button from '../Button';
import {user, fieldTranslation, errorMessageTypes} from './assets/data.js'

export default class Form extends Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errorsMessages: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isSubmitted: false
  }

  renderFields = () => {
    const fields = Object.keys(this.state.values);
    return fields.map(field => {
      return (
        <AuthField
          key={field}
          translation={fieldTranslation[field]}
          value={this.state.values[field]}
          className={field}
          onChange={this.onChange}
          errorMessage={this.state.errorsMessages[field]}
        />
      )
    })
  }

  onChange = (e) => {
    this.setState({
      values: { ...this.state.values, ...{[e.target.name]: e.target.value} },
      errorsMessages: {
        firstname: '',
        lastname: '',
        password: ''
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const valuesArr = Object.entries(this.state.values);

    valuesArr.forEach(item => {
      if( item[1] === '' ){
        errors[item[0]] = errorMessageTypes.emptyInput[item[0]]
      }
      else if( item[1] !== user[item[0]].toLowerCase() ){
        errors[item[0]] = errorMessageTypes.wrongInput[item[0]]
      }
    });

    if(!Object.keys(errors).length){this.setState({ isSubmitted: true })}

    this.setState({
      errorsMessages: { ...this.state.errorsMessages, ...errors }
    })
  }

  render(){
    return (
      <div className='app-container'>
        {this.state.isSubmitted ?
          (
            <img src={bond} alt='bond' className='t-bond-image'/> 
          ) : (
            <form className='form'>
              <h1>Введите свои данные, агент</h1>
              {this.renderFields()}
              <Button onClick = {this.onSubmit}/>
            </form>
          )
        }
      </div>
    )
  }
}