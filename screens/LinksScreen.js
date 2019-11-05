import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { Container, Toast, Content, Input, Item, Button, Text, Right } from 'native-base';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff', paddingTop: 35, }}>
          <View style={{ flexDirection: 'row', padding: 17 }}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  backgroundColor: '#FF3366',
                  borderRadius: 50,
                  marginTop: 10
                }}
              >
                <Icon.Entypo
                  name='menu'
                  size={26}
                  color="#fff"

                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.Heading}>
                Garage
            </Text>
            </View>
          </View>
          <View style={{ paddingLeft: '4%', paddingRight: '4%', paddingBottom: 12, paddingTop: 30 }}>
            <Item style={{ borderColor: 'transparent',backgroundColor:'#000',borderRadius: 10,paddingLeft:5,paddingRight:5}}>
              <Icon.EvilIcons
                name='search'
                size={26}
                color="#fff"

              />
              <Input
                placeholder='Year, Make and Model'
                placeholderTextColor='#fff'
                color='#fff'
                style={{color: '#fff'}}
                onChangeText={(email) => this.setState({ email })}
              />
              <Icon.Ionicons
                name='ios-mic'
                size={26}
                color="#fff"
                style={{marginRight:5}}

              />
            </Item>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40, paddingBottom: 25 }}>
            <View style={styles.ScrollView}>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFF2',
  },
  Heading: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 10,
    textAlign: 'center',
    marginRight: 25,
  },
  ScrollView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 400,
    width: '100%'
  },
  Chatbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3366',
    borderRadius: 25,
    padding: 11,
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
  }
});
