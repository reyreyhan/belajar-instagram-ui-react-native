import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
    Icon
} from 'native-base'

class CardComponent extends Component {
    state = {  }
    render() { 
        const images = {
            "1": require('../assets/feed/feed.jpg'),
            "2": require('../assets/feed/feed2.jpg'),
            "3": require('../assets/feed/feed3.jpg'),
            "4": require('../assets/feed/feed4.jpg'),
        }
        
        const location = {
            "1": "Pacific Ocean",
            "2": "Fuji Mountain",
            "3": "Politeknik Elektronika Negeri Surabaya",
            "4": "EEPIS News & Network Team Room",
        }

        const date = {
            "1": "Oktober 21, 2018",
            "2": "September 18, 2018",
            "3": "Agustus 17, 2018",
            "4": "Juli 10, 2018",
        }

        return (  
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/profile/go.png')}/>
                        <Body>
                            <Text style={{fontWeight: "900"}}>
                                reyreyhan
                            </Text>
                            <Text note>
                                {location[this.props.location]}
                            </Text>
                        </Body>
                    </Left>
                </CardItem>
                <Image source={images[this.props.imageSource]} style={styles.feed}/>
                <CardItem style={{height: 30}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{color:'black', fontSize: 25 }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{color:'black', fontSize: 25}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{color:'black', fontSize: 25}} />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-bookmark-outline" style={{color:'black', fontSize: 25}} />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{fontWeight: "900"}}>{this.props.likes} Likes</Text>
                        <Text>
                            <Text style={{fontWeight: "900"}}>
                                reyreyhan 
                            </Text>
                            <Text style={{color: "white"}}>_</Text>
                            Lorem ipsum dolor sit amet, at mea aeterno scripta aliquando. Vix cetero nominati definiebas ei, qui sale homero scribentur te, exerci feugiat consequat ei est. Veritus facilis maiorum eos ad, pri ea detracto explicari. Sed ex docendi eloquentiam. Sale causae alienum ei sea, ad albucius patrioque vis.
                        </Text>
                        <Text style={{fontSize:12}}>{date[this.props.date]}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
 
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feed: {
      height: 200,
      width: null,
      flex: 1,
  }
});