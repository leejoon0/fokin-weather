import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "Haze",
        subtitle:"and this one as well then?"
    },
    Thunderstorm:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Dizzle:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Rain:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Snow:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Clear:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Clouds:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0b0","#D39D38"],
        title: "",
        subtitle:""
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
                <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions["Haze"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Haze"].subtitle}</Text>
                </View>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom:10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
})