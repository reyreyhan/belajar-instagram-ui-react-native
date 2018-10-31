import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Icon} from 'native-base'
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation'

import HomeTab from './TabNavigator/HomeTab'
import SearchTab from './TabNavigator/SearchTab'
import AddMediaTab from './TabNavigator/AddMediaTab'
import LikesTab from './TabNavigator/LikesTab'
import ProfileTab from './TabNavigator/ProfileTab'

class MainScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    render() { 
        return (  
            <AppTabNavigator />
        );
    }
}
 
export default MainScreen;

const AppTabNavigator = TabNavigator(
    {
        Home: {
            screen: HomeTab
        },
        Search: {
            screen: SearchTab
        },
        Add: {
            screen: AddMediaTab 
        },
        Likes: {
            screen: LikesTab
        },
        Profile: {
            screen: ProfileTab
        },
    },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});