import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Icon, 
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Content,
    Thumbnail
} from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent'


var images = [
    require('../../assets/feed/feed.jpg'),
    require('../../assets/feed/feed2.jpg'),
    require('../../assets/feed/feed3.jpg'),
    require('../../assets/feed/feed4.jpg'),
    require('../../assets/feed/feed5.jpg'),
    require('../../assets/feed/feed6.jpg'),
    require('../../assets/feed/feed7.jpg'),
    require('../../assets/feed/feed8.jpg'),
    require('../../assets/feed/feed9.jpg'),
    require('../../assets/feed/feed10.jpg'),
    require('../../assets/feed/feed11.jpg'),
    require('../../assets/feed/feed12.jpg'),
    require('../../assets/feed/feed13.jpg'),
    require('../../assets/feed/feed14.jpg'),
    require('../../assets/feed/feed15.jpg'),
    require('../../assets/feed/feed16.jpg'),
    require('../../assets/feed/feed17.jpg'),
    require('../../assets/feed/feed18.jpg'),
]

var {width,height} = Dimensions.get('window')

class ProfileTab extends Component {
    state = {  }
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-person" style={{color: tintColor}} />
        
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} style={[ 
                    {width:(width)/3},
                    {height:(width)/3},
                    {marginBottom: 2},
                        index % 3 !==0 ? {paddingLeft: 2} : {paddingLeft: 0}
                    ]}>
                        <Image style={{flex: 1, width: undefined, height: undefined}}
                            source={image}
                        />
                </View>
            )
        })
    }

    renderSection = () => {
        if(this.state.activeIndex == 0) {
            return (
               <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
                    {this.renderSectionOne()}
               </View>
            )
        } else if(this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="39" location="1" date="1" />
                    <CardComponent imageSource="2" likes="43" location="2" date="1" />
                    <CardComponent imageSource="3" likes="28" location="3" date="1" />
                    <CardComponent imageSource="4" likes="32" location="4" date="1" />
                </View>
            )
        } else if(this.state.activeIndex == 2) {
            return (
               <Text>Third Section</Text> 
            )
        } else if(this.state.activeIndex == 3) {
            return (
               <Text>Fourth Section</Text> 
            )
        }
    }
    
    render() { 
        return (  
            <Container style={{flex:1, backgroundColor: 'white'}}>
                <Header style={{backgroundColor: "white"}}>
                    <Left><Text style={{fontWeight: "900", fontSize: 15, textAlign: 'center'}}>reyreyhan</Text></Left>
                    <Right><EntypoIcon name="back-in-time" style={{fontSize: 30}}></EntypoIcon></Right>
                </Header>
                <Content>

                    <View style={{flexDirection: 'row', paddingTop: 20, paddingLeft: 10}} >
                        <View style={{flex: 1}} >
                            <Image source={require('../../assets/profile/go.png')}
                                style={{width: 100, height:100, borderRadius: 50}}
                            />
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                                <View>
                                    <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>18</Text>
                                    <Text style={{fontSize: 15, color: 'grey', textAlign: 'center'}}>posts</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>444</Text>
                                    <Text style={{fontSize: 15, color: 'grey', textAlign: 'center'}}>followers</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>333</Text>
                                    <Text style={{fontSize: 15, color: 'grey', textAlign: 'center'}}>following</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 10}}>
                                <Button bordered dark style={{flex:3, marginLeft: 10,
                                justifyContent: 'center', height: 30}} >
                                    <Text>Edit Profile</Text>
                                </Button>
                                <Button bordered dark style={{flex:1, marginLeft: 5, marginRight: 10,
                                justifyContent: 'center', height: 30}} >
                                    <Icon name="settings" />
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Reyhan Alphard Savero</Text>
                        <Text>welcome to the beginning of nothingness</Text>
                        <Text style={{color: 'blue'}}>reyhanalphard.com</Text>
                    </View>
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
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/new.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>New</Text>
                            </View>
                        
                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile1.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Liburan</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile2.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Kampus</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile3.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Kuliyah</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile4.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Club</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile5.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>ENT</Text>
                            </View>

                            <View style={{paddingLeft: 10}}>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2}}
                                    source={require('../../assets/profile/profile6.png')} 
                                />
                                <Text style={{textAlign: 'center'}}>Quotes</Text>
                            </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderTopWidth: 1,
                            borderTopColor: '#eae5e5',
                            borderBottomWidth: 1,
                            borderBottomColor: '#eae5e5',
                        }}>
                            <Button 
                                transparent
                                onPress={() => this.segmentClicked(0)}
                                active={this.state.activeIndex == 0}
                            >
                                <Icon name="ios-apps-outline"
                                    style={[this.state.activeIndex == 0 ? {fontSize: 35} : {color: 'grey', fontSize: 35}]}
                                />
                            </Button>
                            <Button 
                                transparent
                                onPress={() => this.segmentClicked(1)}
                                active={this.state.activeIndex == 1}
                            >
                                <Icon name="ios-list-outline"
                                    style={[this.state.activeIndex == 1 ? {fontSize: 35} : {color: 'grey', fontSize: 35}]}
                                />
                            </Button>
                            <Button 
                                transparent
                                onPress={() => this.segmentClicked(2)}
                                active={this.state.activeIndex == 2}
                            >
                                <Icon name="ios-people-outline"
                                    style={[this.state.activeIndex == 2 ? {fontSize: 35} : {color: 'grey', fontSize: 35}]}
                                />
                            </Button>
                            <Button 
                                transparent
                                onPress={() => this.segmentClicked(3)}
                                active={this.state.activeIndex == 3}
                            >
                                <Icon name="ios-bookmark-outline"
                                    style={[this.state.activeIndex == 3 ? {fontSize: 35} : {color: 'grey', fontSize: 35}]}
                                />
                            </Button>
                        </View>
                        
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>

        );
    }
}
 
export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});