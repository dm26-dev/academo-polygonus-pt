import React from 'react'

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthLoginScreen } from '../components/auth/AuthLoginScreen'
import { HomeScreen } from '../components/home/HomeScreen'


export const RouterApp = () => {
    return (
        <Router>
            <div>

                {/* COMO NO ENCUENTRA LA RUTA / ENTONCES REDIRECCIONA AL LOGIN */}

                <Switch>

                    <Route exact path={'/login'} component={AuthLoginScreen} />
                    <Route exact path={'/home'} component={HomeScreen} />

                    <Redirect to='/login' />

                </Switch>

            </div>
        </Router>
    )
}
