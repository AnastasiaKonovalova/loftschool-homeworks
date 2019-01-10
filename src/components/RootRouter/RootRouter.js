import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';


export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
          <Switch>
            <Route path='/login' component={LoginForm}/>
            <Redirect from='/' exact to='/login'/>
            <PrivateRoute path='/app' component={AppRouter}/>
          </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
