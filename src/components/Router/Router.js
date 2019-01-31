// Реализуйте роутер\
// Вам потребуется использовать PrivateRoute
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Search from '../Search';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login}/>
            <PrivateRoute path='/search' component={Search}/>
        </Switch>
    </BrowserRouter>
) 