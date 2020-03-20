import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "6f461c910bffcac29a7e82f88121620e";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({isLoading: false, temp: data.main.temp})
  }
  getLocation = async() => {
    try{

      await Location.requestPermissionsAsync();      
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading></Loading> : <Weather temp={temp}></Weather>;
  }
}

