import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'; 

const API_KEY = "a2209a4110b206efd176cd6f50c457be";

export default class App extends Component {
  state = {
    //data api를 불러오면 isLoaded 값은 true로 변하게, 로딩 중에는 false
    isLoaded: false,
    error: null,
    temperature : null,
    name : null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
      
          this._getWeather(position.coords.latitude,position.coords.longitude)

    },
     error => {
       this.setState({
           error: error
       }); 
     }

  );
  }


  _getWeather = (lat,long) => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=a2209a4110b206efd176cd6f50c457be'
    )
    .then(response => response.json())
    .then(json => {
      this.setState ({
        temperature: json.main.temp , 
        name : json.weather[0].main,
        isLoaded : true
      })
    });
  }; 
 


  render() {
    const {isLoaded, error} = this.state;
    return (
      <View style={styles.container}>

         {/* barStyle = "dark-content" / hidden = "true" */}
        <StatusBar barStyle = "light-content"/>
          {/* 로딩 성공하면 날씨를, 로딩중이면 로딩 페이지를 보여줌 */}
         {isLoaded ? (<Weather/ >) :( 
         <View style={styles.loading}>
         <Text style={styles.loadingText}>Getting the fucking weather</Text>
         {error? <Text style={styles.errorText}>{error}</Text>:null}
         </View>)}
      </View>
    );
  }
}    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
   color: 'red',
   backgroundColor: 'transparent',
   marginBottom : 40
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
