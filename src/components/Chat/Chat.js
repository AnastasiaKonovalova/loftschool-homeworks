import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message';

export default class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    }

    changeInputMessage = (e) => {
        this.setState({
            messageInput: e.target.value
        })
    }

    sendMessageOnEnter = (e) => {
        if (e.key === 'Enter' && this.state.messageInput !== ''){
            this.setState({
                messages: [ ...this.state.messages, {text: this.state.messageInput} ],
                messageInput: ''
            })
        }
    }

    render() {
        return (
            <div className = 'chat'>
                <div className = 'message-list'>
                    <div className = 'messages'>
                        {this.state.messages.map((message) => <Message key = {message.text} text = {message.text}/>)}
                    </div>
                </div>
                <input
                    className = 'input-message'
                    value = {this.state.messageInput} 
                    onChange = {this.changeInputMessage}
                    onKeyPress = {this.sendMessageOnEnter}
                />
            </div>
        )
    }
};

