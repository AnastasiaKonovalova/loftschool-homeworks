// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './ShowPreview.module.css';
import {fetchShowsRequest} from '../../actions';

class ShowPreview extends PureComponent{
    renderResolve = (result) => {
        return result.map(show => {
            return (
                <div key={show.id} className={`${styles.container} t-preview`}>
                    <div>
                        <Link to={`/shows/${show.id}`} className='t-link'>{show.name}</Link>
                        { show.image
                            ? <img alt={show.name} src={show.image.medium}/>
                            : null
                        }
                    </div>
                    <div dangerouslySetInnerHTML={{__html: show.summary}}/>
                </div>
            )
        })
    }

    renderError = error => <div>Произошла ошибка: {error.message}</div>

    render(){
        const {isFetching, result, error} = this.props;

        if (isFetching) return <p>Загрузка</p>
        else if(error) return this.renderError(error);

        else return this.renderResolve(result)
    }
}

const mapStateToProps = state => state.search;
const mapDispatchToProps = {fetchShowsRequest};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPreview)