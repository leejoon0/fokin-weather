import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Thunderstorm:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Dizzle:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Rain:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Snow:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Clear:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Clouds:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"]
    }
}

export default function Weather ({temp, condition}){
    return (
            <LinearGradient
                colors={weatherOptions["Haze"].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons 
                        size={96} 
                        name={weatherOptions["Haze"].iconName} 
                        color="white">
                    </MaterialCommunityIcons>
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