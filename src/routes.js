import React from 'react';
import App from './App';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    )
}