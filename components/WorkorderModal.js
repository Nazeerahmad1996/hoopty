import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';

import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    BackHandler
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Workorder extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.goBack(); // works best when the goBack is async
        return true;
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                                <Image style={{ height: 200, width: 299 }} source={require('../assets/images/map2.png')} />

                <View style={{ backgroundColor: '#fff', borderRadius: 10 }}>
                <Image style={{ height: 200, width: 299 }} source={require('../assets/images/map2.png')} />

                    <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                    <Image style={{ height: 200, width: 299 }} source={require('../assets/images/map2.png')} />

                        <View style={{ flexDirection: 'row', padding: 17 }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('HomeStack')}
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
                                        onPress={() => this.props.navigation.navigate('Stats')}
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
        height: 1000,
        width: 1000
    },
    Chatbtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 25,
        paddingTop: 7,
        paddingBottom: 7
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
    }
})