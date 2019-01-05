import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (storageKey, arr) => (WrappedComponent)  => {
    return class extends Component{
        savedData = load(storageKey);

        saveData = (data) => {
            arr = [...arr, data];
            console.log(arr);
            return save(storageKey, arr);
        }

        render(){
            return (
                <WrappedComponent 
                    savedData={this.savedData} 
                    saveData={this.saveData} 
                    {...this.props}
                />
            )
        }
    }
};



export default withLocalstorage;
