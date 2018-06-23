import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'; 
import {Ionicons} from '@expo/vector-icons';

export default class App extends Component {
  state = {
    //data api를 불러오면 isLoaded 값은 true로 변하게, 로딩 중에는 false
    isLoaded: true
  };
  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>

         {/* barStyle = "dark-content" / hidden = "true" */}
        <StatusBar barStyle = "light-content"/>
          {/* 로딩 성공하면 그값을, 로딩중이면 로딩 페이지를 보여줌 */}
         {isLoaded ? <Weather/ > : <View style={styles.loading}><Text style={styles.loadingText}>Getting the fucking weather</Text></View>}
      </View>
    );
  }
}    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
     flex : 1,
     backgroundColor: '#FDF6AA',
     justifyContent: 'flex-end',
     paddingLeft: 25
  },
  loadingText: {
     fontSize : 38,
     marginBottom : 100
  }
});
