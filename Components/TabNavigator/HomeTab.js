import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import {
    Container, 
    Icon, 
    Content, 
    Thumbnail, 
    Header, 
    Left, 
    Right, 
    Body, 
} from 'native-base'

import CardComponent from '../CardComponent'

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}} />
        )
    }

    render() { 

        return ( 
            <Container style={styles.container}>

                <Header style={{backgroundColor: "white"}}>
                    <Left><Icon name="ios-camera-outline" style={{fontSize: 40}}></Icon></Left>
                    <Body><Text style={{fontWeight: "900", fontSize: 15}}>Learn React Native~</Text></Body>
                    <Right><Icon name="ios-send-outline" style={{fontSize: 40}}></Icon></Right>
                </Header>

                <Content>

                    <View style={{height: 100}}>
                        <View style={{flex: 3}}>
                            <ScrollView 
                                horizontal={true}
                                showHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}
                            >

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/go.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Your Story</Text>
                            </View>
                        
                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile1.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>docker</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile2.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>laravel</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile3.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>node.js</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile4.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>gin.gonic</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile5.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>iris</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile6.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>express.js</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile7.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>sails.js</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/profile/profile8.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>begoo</Text>
                            </View>
                            </ScrollView>
                        </View>
                    </View>

                    <CardComponent imageSource="1" likes="39" location="1" date="1" />
                    <CardComponent imageSource="2" likes="43" location="2" date="1" />
                    <CardComponent imageSource="3" likes="28" location="3" date="1" />
                    <CardComponent imageSource="4" likes="32" location="4" date="1" />

                </Content>
            </Container>
        );
    }
}
 
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});