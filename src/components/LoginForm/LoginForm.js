import React, { PureComponent } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';


class LoginForm extends PureComponent{
    state = {
        email: '',
        password: ''
    }

    renderField = (field) => {
        const text = field === 'password' ? 'Пароль' : 'Почта';
        const {value} = this.state;
        return (
            <p key={field}>
                <label htmlFor={field} className={styles.labelText}>{text}</label>
                <input 
                    type={field === 'password' ? 'password' : 'text'} 
                    name={field} 
                    className={`${styles.input} t-input-${field}`} 
                    onChange={this.handleChange}
                    value={value}
                />
            </p>
        )
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        const {authorize} = this.props;

        event.preventDefault();
        authorize()
    }

    renderForm = () => {
        const fields = Object.keys(this.state);
        const {authorize, authError} = this.props;
        const {email, password} = this.state;

        return (
            <div className={styles.bg}>
                <form className={`${styles.form} t-form`} onSubmit={(e)=>e.preventDefault()}>
                    {fields.map( field => this.renderField(field) )}

                    {authError !== '' && <p className={styles.error}>{authError}</p>}

                    <div className={styles.buttons}>
                        <button className={`${styles.button} t-login`} onClick={()=>authorize(email, password)}>Войти</button>
                    </div>
                </form>
            </div>
        )
    }

    render(){
        console.log('render Form')

        const {isAuthorized} = this.props;

        return (
            <>
                {
                    isAuthorized
                    ? <Redirect to='/app'/>
                    : this.renderForm()
                }
            </>
        )
    }
}

export default withAuth(LoginForm)