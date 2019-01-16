// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import styles from './ShowPage.module.css';
import {fetchShowsRequest} from '../../actions';

class ShowPage extends PureComponent{
    componentDidMount(){
        const {fetchShowsRequest, match} = this.props;
        fetchShowsRequest(match.params.id)
    }

    renderShow = (result) => {
        return (
            <div className='App'>
                <p>{result.name}</p>
                { result.image
                    ? <img alt={result.name} src={result.image.medium}/>
                    : null
                }
                <div dangerouslySetInnerHTML={{__html: result.summary}}/>
                <div className={styles.cast}>
                    {result._embedded
                        ?  result._embedded.cast.map(actor => {
                            return (
                                <div key={`${actor.character.id} + ${ actor.person.id}`} className='t-person'>
                                    <p>{actor.person.name}</p>
                                    { actor.person.image
                                        ? <img alt={actor.person.name} src={actor.person.image.medium}/>
                                        : null
                                    }            
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </div>
        )
    }

    renderError = error => <div className='App'>Произошла ошибка: {error.message}</div>

    render(){
        const {isFetching, showData, error} = this.props;

        if (isFetching) return <p>Загрузка</p>
        else if(error) return this.renderError(error);
        else return this.renderShow(showData)
    }
}

const mapStateToProps = state => state.shows;
const mapDispatchToProps = {fetchShowsRequest};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)
