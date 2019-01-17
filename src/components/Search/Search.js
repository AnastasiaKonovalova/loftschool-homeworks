// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, { Component } from 'react';
import {connect} from 'react-redux';

import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import { fetchSearchRequest } from '../../actions';


class Search extends Component{
    state = {
        inputValue: ''
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const {inputValue} = this.state;
        const {fetchSearchRequest} = this.props;
        fetchSearchRequest(inputValue)
        
        this.setState({
            inputValue: ''
        })

    }
    render(){
        const {inputValue} = this.state;
        const {search: {isFetching, result, error}} = this.props;
        return (
            <div className='App'>
                <form className={styles.previewList} onSubmit={this.handleClick}>
                    <input
                        className={`${styles.input} t-input`}
                        onChange={this.handleInputChange}
                        value={inputValue}
                    />
                    <div className={styles.buttonWrapper}>
                        <button className={`${styles.button} t-search-button`} onClick={this.handleClick}>Найти</button>
                    </div>
                </form>

                <div className={`${styles.searchPanel} t-search-result`}>
                    {isFetching && <p>Загрузка</p>}
                    {error && <p>Произошла ошибка: {error.message}</p>}
                    {result.length > 0 && result.map(show => 
                        <ShowPreview
                        key={show.id}
                        image={show.image}
                        name={show.name}
                        id={show.id}
                        summary={show.summary}
                        />
                    )}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => state;
const mapDispatchToProps = {fetchSearchRequest};

export default connect(mapStateToProps, mapDispatchToProps)(Search)