import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeViewGestureHandler, Directions } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
        <View style={styles.redView} />
        <View style={styles.yelloView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'space-around',
    alignItems:'stretch',
    flexDirection: 'row',
    flexWrap : 'wrap'
  },
  redView: {
   
    height: 50,
    width:50,
    backgroundColor: 'red'

  }, 
  yelloView: {
    height: 50,
    width:50,
    backgroundColor: 'yellow'
  }
});
