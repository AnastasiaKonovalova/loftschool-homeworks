import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AuthField extends Component {
    static propTypes = {
        props: PropTypes.shape({
            translation: PropTypes.string.isRequired,
            className: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            errorMessage: PropTypes.string.isRequired,
            onChange: PropTypes.func.isRequired,
        })
    }

    render(){
        return(
            <div className='field'>
                <label className='field__label'>
                    <span className='field-label'>{this.props.translation}</span>
                    <input 
                        name={this.props.className}
                        className={`field__input field-input t-input-${this.props.className}`}
                        value={this.props.value}
                        type='text'
                        onChange={this.props.onChange}
                    />
                </label>
                <span className={`field__error field-error t-error-${this.props.className}`}>{this.props.errorMessage}</span>
            </div>
        )
    }
}