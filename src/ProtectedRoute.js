import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { render } from 'sass'

function ProtectedRoute({isLogged: isLogged, component: Component, ...rest}) {
    <Route {...rest}>
    render={(props) => {
  return (
    isLogged?<Component/>:<Redirect to={{path: '/login', state: props.location}}/>
  )}}
  </Route>
}

export default ProtectedRoute 