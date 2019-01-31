// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import path from 'ramda/src/path';


import {
    changeSol,
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure
} from './actions'

const sol = handleActions({
    [changeSol]: (state, action) => ({...state, current: action.payload})
}, {
    current: 1,
    min: 1,
    max: 100
});

const photos = handleActions({
    [fetchPhotosRequest]: (state, action) => {
        const currentRover = state[action.payload.name];
        return ({
        ...state,
        [action.payload.name]: {
            ...currentRover,
            [action.payload.sol]: {
                isLoading: true,
                isLoaded: false,
                photos: []
            }
        }
    })},

    [fetchPhotosSuccess]: (state, action) => {
        const currentRover = state[action.payload.name];
        return ({
            ...state,
            [action.payload.name]: {
                ...currentRover,
                [action.payload.sol]: {
                    isLoading: false,
                    isLoaded: true,
                    photos: action.payload.photos.photos
                }
            }
        })
    },

    [fetchPhotosFailure]: (state, action) => {
        const currentRover = state[action.payload.name];
        return ({
            ...state,
            [action.payload.name]: {
                ...currentRover,
                [action.payload.sol]: {
                    isLoading: false,
                    isLoaded: true,
                    error: action.payload.error
                }
            }
        })
    }
}, {});


export default combineReducers({
    sol,
    photos
});



export const getSol = state => state.roverPhotos.sol;
export const getPhotos = state => state.roverPhotos.photos;
export const getRover = state => rover => state.roverPhotos.photos[rover];

export const getIsLoadedCurry = state => {
    // console.log('getIsLoadedCurry TEST state', state);
    return (rover) => {
        // console.log('getIsLoadedCurry TEST rover', rover);
            return (sol) => {
                // console.log('getIsLoadedCurry TEST sol', sol);
                    return path([rover, `${sol}`, 'isLoaded'])
                    // return state.roverPhotos.photos[`${rover}`][`${sol}`].isLoaded
            }
    }
};

export const getErrorCurry = state => rover => sol => path([rover, `${sol}`, 'error'])