import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try{

      await Location.requestPermissionsAsync();      
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading></Loading> : null;
  }
}

