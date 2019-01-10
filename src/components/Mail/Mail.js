import React, { Component, PureComponent } from 'react';
import styles from './Mail.module.css';
import { withData } from '../../context/Data';

export default class Mail extends Component{
    render(){
        const {purpose, ...mail} = this.props;
        return (
            <div className={styles.container}>
                <p className={`t-mail-${purpose}`}>{`${purpose[0].toUpperCase() + purpose.slice(1)}: `}<b>{mail[purpose]}</b></p>
                <p className='t-mail-body'>{mail.body}</p>
            </div>
        )
    }
}