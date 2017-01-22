import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
return (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#628CA7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: '#FBFBE9'
  }
};

export { Header };
