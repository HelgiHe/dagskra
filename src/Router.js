import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ChannelList from './components/ChannelList';
import Schedule from './components/Schedule';

const RouterComponent = () => {

  const date = () => {
    return new Date().toString().substring(0, 10);
  };

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='list' component={ChannelList} title="Sjónvarpsstöðvar" />
      <Scene key='channel' component={Schedule} title={date} />
    </Router>
  );
};

export default RouterComponent;
