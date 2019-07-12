/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Container, Content, ListItem, Button } from 'native-base';


const instructions = {
  din: 'Loren ipsum dolor sit amet, consectetur adipiscing elit.\n' + 'ullamcorper odio eget luctus faucibus. Aenean lorem\n' + 'hendrerit, maximus feils a, fnibus psum, Proin nequw a'
}

const image = require('./img/icon.png');
const defaultColor = "#209817"

export default class App extends Component {

  state = {
    data: [
      {
        uri: image,
        btn: false
      },
      {
        uri: image,
        btn: false
      },
      {
        uri: image,
        btn: false
      },
      {
        uri: image,
        btn: false
      },
      {
        uri: image,
        btn: true
      }
    ]
  }



  renderItems(props) {
    return (
      <ListItem
        noBorder
        key={props.index}
        style={{ flex: 1, justifyContent: 'space-between' }}
      >
        {props.item.uri &&
          <Image style={[{ height: 90, width: 90 }]} resizeMode={'contain'} source={props.item.uri} />
        }
        {props.item.btn &&
          <Button
            block
            transparent
            style={[{ height: 90, width: 90 }]}
            onPress={() => { alert('Coming soon!') }}>
            <View style={{ height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
              <View style={{ height: 20, width: '80%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: defaultColor }}>Button</Text>
              </View>
            </View>
          </Button>
        }
      </ListItem>
    )
  }

  render() {

    return (
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#F5FCFF'
        }}>
        <Content>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 45
            }}>
            <Text style={{ textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>Logo</Text>
          </View>
          <View
            style={{
              marginHorizontal: 7.5,
              justifyContent: 'center',
              alignItems: "center",
              borderColor: defaultColor,
              borderRadius: 45,
              height: 100,
              marginVertical: 7.5,
              borderWidth: 1
            }}>
            <View style={{ height: 80 }}>
              <Text style={{ fontSize: 18, fontWeight: '800', paddingTop: 7.5, color: defaultColor }}>DIN</Text>
              <Text style={{ fontSize: 12, fontWeight: '500', paddingTop: 7.5 }}>{instructions.din}</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 7.5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: defaultColor,
              borderRadius: 45,
              height: 90,
              marginVertical: 7.5,
              borderWidth: 1
            }}>
            <View style={{ height: '100%' }}>
              <Text style={{ fontSize: 18, fontWeight: '800', paddingTop: 7.5, color: defaultColor }}>MISIUNE</Text>
              <Text style={{ fontSize: 12, fontWeight: '500', paddingTop: 7.5 }}>{instructions.din}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <FlatList
              keyExtractor={item => item.key}
              data={this.state.data}
              numColumns={2}
              renderItem={this.renderItems}
            />
          </View>
        </Content>
      </Container>
    );
  }
}