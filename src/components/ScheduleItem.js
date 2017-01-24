import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ScheduleItem = ({ item }) => {
  const time = clipString(item.startTime);

    return (
      <CardSection>
        <Text>{item.title}</Text>
        <Text>{time}</Text>
      </CardSection>
    );
  };

  function clipString(str) {
    const a = str.substring(11, 16);
    return a;
  }
export default ScheduleItem;
