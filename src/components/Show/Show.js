import React, { Component } from 'react';
import './Show.css';
import {getShowInfo} from '../../api.js'

export default class Show extends Component {
    state = {
        showId: '',
        data: ''
    }

    static getDerivedStateFromProps(props, state){
        return state = {showId: props.showId}
    }

    componentDidUpdate(prevProps){
        const {showId} = this.state;
        if(prevProps.showId !== showId){
            getShowInfo(showId)
            .then(response => this.setState( {data: response} ))
        }
    }

    render(){
        let content;
        const {data, showId} = this.state;
        data !== ''
        ? (
            content = <div className='show'>
                        <img className='show-image' alt={showId} src={data.image.medium}/>
                        <h2 className='show-label t-show-name'>{data.name}</h2>
                        <p className='show-text t-show-genre'><b>Жанр: </b>{data.genres.join(', ')}</p>
                        <p className='show-text t-show-summary' dangerouslySetInnerHTML = {{__html: data.summary}}></p>
                      </div>
        ) : (
            content = <p className='show-inforation t-show-info'>Шоу не выбрано</p>
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}