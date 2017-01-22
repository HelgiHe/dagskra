import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

const ChannelItem = ({ channel }) => {
const goToSchedule = () => Actions.channel({ channel });

    return (
      <CardSection>
        <Button onPress={goToSchedule} >
          {channel.name}
        </Button>
     </CardSection>
    );
};

export default ChannelItem;
