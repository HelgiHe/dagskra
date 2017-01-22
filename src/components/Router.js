import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ChannelList from './ChannelList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="employeeList"
        component={ChannelList}
        title="Employees"
        initial
      />
    </Router>
  );
};

export default RouterComponent;
