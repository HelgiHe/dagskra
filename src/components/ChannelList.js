import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Spinner } from './common';
import ChannelItem from './ChannelItem';

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { channels: [], loading: true };
  }

componentWillMount() {
  axios.get('https://apis.is/tv/')
     .then(response => this.setState({ channels: response.data.results[0].channels, loading: false }));
     //.then(response => console.log(response.data.results[0].channels));
 }

 showSpinner() {
   if (this.state.loading === true) {
     return <Spinner size='large' />;
   }
   return;
 }

 renderChannels() {
   return this.state.channels.map((channel, index) =>
     <ChannelItem key={index} channel={channel} />);
 }
  render() {
    return (

        <ScrollView>
          {this.renderChannels()}
          {this.showSpinner()}
        </ScrollView>

    );
  }
}
