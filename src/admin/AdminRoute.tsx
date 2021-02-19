import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import auth from '../../src/Auth'

function AdminRoute(input: any) {
    const {component, ...rest} = input  
    const Component: any = component
    return (
      <Route
        {...rest}
        render={props =>
          auth.isAdmin() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/app/admin/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
}
export default AdminRoute