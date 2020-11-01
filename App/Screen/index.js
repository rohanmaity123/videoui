//import liraries
import { Button, Card, Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';
import ListCard from '../Component/ListCard'

const list =[
    {
        name:'aall'
    },
    {
        name:'bal',
    },
    {
        name:'chal',
    },
    {
        name:'daal',
    }
]
// create a component
const Home = () => {
    return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
            <ScrollView horizontal={true}
                style={{marginVertical:20}}
                showsHorizontalScrollIndicator={false}
            >
                {
                    list.map((item,index)=>{
                        return(
                            <View style={{marginHorizontal:10}} >
                                <ListCard />
                                <Text style={{color:'#fff',textAlign:'center',marginTop:10}}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <Card style={styles.content}>
                <Image source={{uri:'https://st3.depositphotos.com/13194036/34597/i/450/depositphotos_345972394-stock-photo-blonde-sexy-nurse-holding-syringe.jpg'}}
                    style={{height:'100%',width:'100%'}}
                    resizeMode="cover"
                    borderRadius={10}
                />
            </Card>
            <View style={{marginVertical:20,flexDirection:'row',justifyContent:"space-between",paddingHorizontal:15}}>
                <Button style={styles.button}>
                    <Icon name="camera-reverse-outline" type="Ionicons" />
                </Button>
                <Button style={{...styles.button,backgroundColor:'#2ECC71'}}>
                    <Icon name="microphone" type="FontAwesome5" />
                </Button>
                <Button style={{...styles.button,backgroundColor:'#2ECC71'}}>
                    <Icon name="video" type="FontAwesome5" />
                </Button>
                <Button style={{...styles.button,backgroundColor:'red'}}>
                    <Icon name="cross" type="Entypo" />
                </Button>
            </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    content:{
        height:300,
        width:'95%',
        borderRadius:10,
        alignSelf:'center'
    },
    button:{
        height:60,
        width:60,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
    }
});

//make this component available to the app
export default Home;
