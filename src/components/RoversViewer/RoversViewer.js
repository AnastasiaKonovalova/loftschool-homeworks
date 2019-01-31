// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

import React, { Component } from 'react';
import { connect } from 'react-redux';
import  path from 'ramda/src/path';

import { fetchPhotosRequest, changeSol } from '../../modules/RoverPhotos/actions';
import { getSol, getPhotos, getIsLoadedCurry, getErrorCurry } from '../../modules/RoverPhotos/RoverPhotos';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';

class RoversViewer extends Component{
    rovers = ['curiosity', 'opportunity', 'spirit'];
    
    componentDidMount(){
        const {fetchPhotosRequest} = this.props;
        this.rovers.forEach(rover => fetchPhotosRequest({
            name: rover,
            sol: 1
        }))
    }



    render(){
        const { photos, 
            changeSol, 
            sol: {current, min, max}, 
            getIsLoaded, 
            getError } = this.props;
        // console.log('loloo photos curiosity', photos['curiosity'])
        // if(photos['curiosity'] && photos['curiosity'][`${current}`]){
        //     console.log('RoversViewer CURRY',  getIsLoaded('curiosity')(current))
        // }

        return (
            <div className={styles.root}>
                <SelectSol changeSol={changeSol} minSol={min} maxSol={max} selectedSol={current}/>
                <div className={styles.сontainer}>
                    {
                        // this.rovers.map(rover => {
                        //     const search = path([rover, `${current}`, 'photos']);
                        //     return search(photos)
                        //     && <RoverPhotos key={rover} name={rover} photos={photos[rover][`${current}`].photos}/>
                        // })
                    }
                    {
                        this.rovers.map(rover => {
                            if( getIsLoaded(rover)(current)(photos) && !getError(rover)(current)(photos) ) {
                                return <RoverPhotos key={rover} name={rover} photos={photos[rover][`${current}`].photos}/>
                            } else if ( getIsLoaded(rover)(current)(photos) && getError(rover)(current)(photos) ) {
                                return <div key={rover}>Ошибка загрузки</div>
                            }
                        })
                    }
                    {
                        // this.rovers.map(rover => photos[rover] && photos[rover][`${current}`] && getIsLoaded(rover)(current)
                        //     && <RoverPhotos key={rover} name={rover} photos={photos[rover][`${current}`].photos}/>)
                    }

                    {
                        // this.rovers.map(rover => photos[rover] && photos[rover][`${current}`] && photos[rover][`${current}`].photos 
                        //     && <RoverPhotos key={rover} name={rover} photos={photos[rover][`${current}`].photos}/>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        sol: getSol(state),
        photos: getPhotos(state),
        getIsLoaded: getIsLoadedCurry(state),
        getError: getErrorCurry(state)
});
const mapDispatchToProps = { fetchPhotosRequest, changeSol };

export default connect(mapStateToProps, mapDispatchToProps)(RoversViewer)