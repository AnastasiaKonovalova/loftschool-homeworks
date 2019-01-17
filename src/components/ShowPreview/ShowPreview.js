// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ShowPreview.module.css';

const ShowPreview = (props) => {
        const {image, name, id, summary} = props;

        return (
            <div className={`${styles.container} t-preview`}>
                <div>
                    <Link to={`/shows/${id}`} className='t-link'>{name}</Link>
                    { image
                        ? <img alt={name} src={image.medium}/>
                        : null
                    }
                </div>
                <div dangerouslySetInnerHTML={{__html: summary}}/>
            </div>
        )
    
}
export default ShowPreview