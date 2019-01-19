import React from 'react';
import App from './App';
import { Switch, Route } from 'react-router-dom';
import DeviceInfo from './DeviceInfo';

const Main = () => (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:deviceID" component={DeviceInfo} />
    </Switch>
);

export default Main;