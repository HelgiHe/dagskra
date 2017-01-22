import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ChannelList from './components/ChannelList';
import Schedule from './components/Schedule';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='list' component={ChannelList} title="Channels" />
      <Scene key='channel' component={Schedule} title="dagskrá" />
    </Router>
  );
};

export default RouterComponent;
