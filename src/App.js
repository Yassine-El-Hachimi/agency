import React, { Component } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));



function App(){
  const isLogged = useSelector(state => state.isLogged);
  if(isLogged){
    return ( 
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Redirect from='/login' to='/dashboard'/>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              {/*<ProtectedRoute isLogged={isLogged} component={TheLayout} path="/" name="Home"/>*/}
              <Redirect from="*" to="/" />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );}
  else{
    return ( 
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Redirect to="/login"/>
              <Redirect from="*" to="/" />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
  }

export default App;
