import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';

import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Workorder extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#c67373', flex: 1 }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 15, zIndex: 5 }}>
                    <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                        <View style={{ flexDirection: 'row', padding: 17 }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('HomeNavigator')}
                                    style={{
                                        marginTop: 3
                                    }}
                                >
                                    <Icon.EvilIcons
                                        name='close-o'
                                        size={45}
                                        color="#ff3e6e"

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.Heading}>
                                    Work order
            </Text>
                            </View>
                        </View>
                        <View style={{ paddingLeft: 23, paddingRight: 23, marginTop: 8 }}>
                            <View elevation={5} style={styles.TimeBox}>
                                <Text style={styles.OrangeText}>Oil Change <Text style={styles.DetailTitle}>- 2007 Jeep Wrangler</Text></Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 3 }}>12:30 PM</Text>
                                        <Text style={{ fontSize: 8, marginLeft: 12 }}>Estimated service starts</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 3 }}>1:00 PM</Text>
                                        <Text style={{ fontSize: 8, marginRight: 5 }}>Estimated service starts</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ paddingBottom: 15, paddingTop: 25, flex: 1 }}>
                                    <TouchableOpacity
                                        style={styles.Chatbtn}
                                    >
                                        <Text style={styles.btnText}>
                                            Contact customer
              </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingBottom: 15, paddingTop: 25, alignItems: 'flex-end' }}>
                                    <TouchableOpacity
                                        style={styles.Chatbtn2}
                                    >
                                        <Text style={styles.btnText}>
                                            Help
              </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: -13 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ImageBackground style={styles.map} source={require('../assets/images/map2.png')} >
                            <View style={{ marginTop: 15 }}>

                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <View elevation={5} style={styles.MapBox}>
                                        <Text style={{ textDecorationLine: 'underline', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>Service Address</Text>
                                        <Text style={{ color: '#8e8e93', fontSize: 12, textAlign: 'center', marginTop: 5 }}>10122 Wilnor Way Laurel, MD. 20723</Text>
                                    </View>
                                    <Image style={styles.pin} source={require('../assets/images/pin.png')} />
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ff3366',
                        borderRadius: 25,
                        paddingTop: 10,
                        paddingBottom: 10,
                        width: 200,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: 30,
                        flex:1,
                        left:85
                    }}
                >
                    <Text style={styles.btnText}>
                        Navigate
              </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        marginRight: 25,
    },
    TimeBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1.0,
        padding: 10
    },
    MapBox: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 280,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1.0,
    },
    OrangeText: {
        color: '#FF7770',
        fontSize: 16,
        marginBottom: 7,
        fontWeight: '500',
        textAlign: 'center'
    },
    DetailTitle: {
        fontSize: 14,
        marginBottom: 7,
        fontWeight: '500',
        color: '#000'
    },
    map: {
        height: 400,
        width: '100%'
    },
    Chatbtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 25,
        paddingTop: 7,
        paddingBottom: 7
    },
    Navigate: {
        backgroundColor: '#ff3366',
        borderRadius: 25,
        paddingTop: 7,
        paddingBottom: 7,
        width: 200,
    },
    Chatbtn2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3366',
        borderRadius: 25,
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: '8%'
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15,
        paddingRight: '12%',
        paddingLeft: '12%'
    },
    pin: {
        marginTop: 20,
        height: 50,
        width: 50
    }
})