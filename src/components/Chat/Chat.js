import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message';

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messageInput: '',
            messages: []
        };
        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }

    changeInputMessage(e){
        this.setState({
            messageInput: e.target.value
        })
    }

    sendMessageOnEnter(e){
        if (e.key === 'Enter' && e.target.value !== ''){
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
                <input className = 'input-message' value = {this.state.messageInput} 
                        onChange = {this.changeInputMessage} onKeyPress = {this.sendMessageOnEnter}/>
            </div>
        )
    }
};

