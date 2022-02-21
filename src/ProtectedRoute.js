import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { render } from 'sass'

function ProtectedRoute({isLogged, component: Component, ...rest}) {
    <Route {...rest}>
    render={(props) => {
    if(isLogged){
      return(<Component {...props}/>);
    }
    else{
      return(<Redirect to="/login"/>);
    }
}}
  </Route>
}

export default ProtectedRoute 