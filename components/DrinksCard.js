import React from 'react';
import { View, Text, StyleSheet, Dimensions,Image } from "react-native";
import Shimmer from './Shimmer';
import { SharedElement } from 'react-navigation-shared-element';
const { width, height } = Dimensions.get('window')
const Card = props => {
  
    return (
       
        <View style={styles.cardView}>
        <View style={styles.ShimmerView}>
        <Shimmer width={width-55} height={height/4.5} />
        </View>
        <SharedElement id={`item.${item.idDrink}.photo`}>
        <Image style={styles.image} source={ {uri:props.imgurl} } />
        </SharedElement>
        <View style={styles.textView}>
            <Text style={styles.itemTitle}> {props.title}</Text>
           
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    cardView: {
        left:8,
        width: width - 55,
        height: height / 4.5,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    ShimmerView: {
        width: width - 55,
        height: height / 4.5,
        borderRadius: 10,      
    },
    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        position:"absolute",
        width: width - 55,
        height: height / 4.5,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
});

export default Card;