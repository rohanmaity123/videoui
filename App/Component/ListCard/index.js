//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const ListCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri:'https://st3.depositphotos.com/13194036/34597/i/450/depositphotos_345972394-stock-photo-blonde-sexy-nurse-holding-syringe.jpg'}}
                style={{height:'100%',width:'100%'}}
                resizeMode="cover"
                borderRadius={10}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:120,
        width:120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:10
    },
});

//make this component available to the app
export default ListCard;
