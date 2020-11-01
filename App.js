import React,{Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './App/Screen/';
import NavigationService from './App/Service/Navigation'

const TabNavigator = createBottomTabNavigator({
  Participents: {
    screen:Home,
    navigationOptions:{
      tabBarLabel:"Participents",
      tabBarIcon:({tintColor}) =><Icon type="Ionicons" name="people" color={tintColor} style={{fontSize:22,color:tintColor}}/>
    }
  },
  Meeting: {
    screen:Home,
    navigationOptions:{
      tabBarLabel:"Meeting",
      tabBarIcon:({tintColor}) => <Icon  name="video" type="FontAwesome5" color={tintColor} style={{fontSize:22,color: tintColor}}/>
    },
  },
  Chat:{
    screen:Home,
    navigationOptions:{
      tabBarLabel:"Chat",
      tabBarIcon:({tintColor}) => <Icon  name="chat" type="Entypo" color={tintColor} style={{fontSize:22,color:tintColor}} />
    }
  }
},
{
  initialRouteName:'Participents',
  headerMode: 'none',
  tabBarOptions:{
    activeTintColor:'#2ECC71',
    labelStyle: {
      fontSize: 10,
    },
    // showLabel:false
  }
});
  const  HomeStack = createStackNavigator({
    HomeTab:{
      screen:TabNavigator,
    },
  },{   
      initialRouteName:'HomeTab',
      headerMode:'none',
  });
  const AppRoot = createAppContainer(HomeStack);
  export default function App(props) {

      return (
          <AppRoot ref={(r) => {NavigationService.setTopLevelNavigator(r)}} />
       )

  }