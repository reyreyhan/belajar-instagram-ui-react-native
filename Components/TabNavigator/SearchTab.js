import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Icon} from 'native-base'

class SearchTab extends Component {
    state = {  }
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-search" style={{color: tintColor}} />
        )
    }
    render() { 
        return (  
            <View style={styles.container}>
                <Text>SearchTab</Text>
            </View>
        );
    }
}
 
export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});