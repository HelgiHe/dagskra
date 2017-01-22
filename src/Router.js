import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ChannelList from './components/ChannelList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='login' component={ChannelList} title="Channels" />
    </Router>
  );
};

export default RouterComponent;
