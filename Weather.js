import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather ({temp}){
    return (
        
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons size={96} name="weather-lightning-rainy" color="white"></MaterialCommunityIcons>
                    <Text style={styles.temp}>{temp}</Text>
                </View>
                <View style={styles.halfcontainer}></View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Dizzle", "Rain", "Snow"
    , "Atmosphere", "Clear", "Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color: "white"
    },
    halfcontainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})