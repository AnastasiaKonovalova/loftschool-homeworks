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
      errorsMessages: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
    this.setState({
      values: Object.assign(this.state.values, {[e.target.name]: e.target.value})
    })
  }

  submit = (e) => {
    e.preventDefault();
    const errors = {};

    for (const key in this.state.values){
      if(this.state.values[key].trim() === ''){
        errors[key] = errorMessageTypes.emptyInput[key]
      } else {
        this.state.values[key] !== user[key].toLowerCase() ?
        errors[key] = errorMessageTypes.wrongInput[key] :
        this.setState({ isSubmitted: true })
      }
    }

    this.setState({
      errorsMessages: Object.assign(this.state.errorsMessages, errors)
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
              <Button onClick = {this.submit}/>
            </form>
          )
        }
      </div>
    )
  }
}