import React, { Component } from 'react';
import axios from 'axios';
import { ListView, Text, View } from 'react-native';
import { Spinner, CardSection } from './common';
import ScheduleItem from './ScheduleItem';

export default class Schedule extends Component {
  constructor(props) {
  super(props);

  this.state = { loading: true,
    dataSource: new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
      }) };
}

  componentWillMount() {
    const endpoint = this.props.channel.endpoint;
    const url = `https://apis.is${endpoint}`;
    axios.get(url)
       .then(response => this.setState({ loading: false,
          dataSource: this.state.dataSource.cloneWithRows(response.data.results) }));
  }

  showSpinner() {
    if (this.state.loading === true) {
      return <Spinner size='large' />;
    }
    return;
  }

  renderRow(item) {
    const time = clipString(item.startTime);

    return (<CardSection>
      <Text style={styles.titleStyle} >{item.title}</Text>
      <Text>{time}</Text>
      </CardSection>
    );
  }

  renderChannels() {
    return this.state.schedule.map((item, index) =>
      <ScheduleItem key={index} item={item} />);
  }

  render() {
    return (
    <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />

      {this.showSpinner()}

  </View>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 20,
    marginBottom: 2
  }
};

function clipString(str) {
  const a = str.substring(11, 16);
  return a;
}
