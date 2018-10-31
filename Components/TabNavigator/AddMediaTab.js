import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Icon} from 'native-base'

class AddMediaTab extends Component {
    state = {  }
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-add" style={{color: tintColor}} />
        )
    }
    render() { 
        return (  
            <View style={styles.container}>
                <Text>AddMediaTab</Text>
            </View>
        );
    }
}
 
export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});