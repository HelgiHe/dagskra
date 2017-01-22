import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';


const ChannelItem = ({ channel }) => {
    return (
      <CardSection>
        <Button>
          {channel.name}
        </Button>
     </CardSection>
    );
};

export default ChannelItem;
