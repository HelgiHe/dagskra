import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Button } from './common';
import ChannelItem from './ChannelItem';

export class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { channels: [] };
  }

componentWillMount() {
  axios.get('https://apis.is/tv/')
     .then(response => this.setState({ channels: response.data.results[0].channels }));
     //.then(response => console.log(response.data.results[0].channels));
 }

 renderChannels() {
   return this.state.channels.map((channel, index) =>
     <ChannelItem key={index} channel={channel} />);
 }
  render() {
    return (

        <ScrollView style={{ backgroundColor: '#D7E9F4' }}>
          {this.renderChannels()}
        </ScrollView>

    );
  }
}
