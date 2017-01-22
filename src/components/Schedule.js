import React, {Component} from 'react';
import axios from 'axios';
import { Text, ScrollView } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';
import ScheduleItem from './ScheduleItem';

export default class Schedule extends Component {
  constructor(props) {
  super(props);

  this.state = { schedule: [], loading: true };
}

  componentWillMount() {
    const endpoint = this.props.channel.endpoint;
    const url = 'https://apis.is' + endpoint;
    axios.get(url)
       .then(response => this.setState({ schedule: response.data.results, loading: false }));
       //.then(response => console.log(response.data.results));
  }

  showSpinner() {
    if (this.state.loading === true) {
      return <Spinner size='large' />;
    }
    return;
  }

  renderRow(item) {
    return <ScheduleItem item={item} />;
  }

  renderChannels() {
    return this.state.schedule.map((item, index) =>
      <ScheduleItem key={index} item={item} />);
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
