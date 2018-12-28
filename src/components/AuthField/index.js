import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AuthField extends Component {
    static propTypes = {
        translation: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        errorMessage: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    render(){
        const {translation, className, value, onChange, errorMessage} = this.props;
        return(
            <div className='field'>
                <label className='field__label'>
                    <span className='field-label'>{translation}</span>
                    <input 
                        name={className}
                        className={`field__input field-input t-input-${className}`}
                        value={value}
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <span className={`field__error field-error t-error-${className}`}>{errorMessage}</span>
            </div>
        )
    }
}