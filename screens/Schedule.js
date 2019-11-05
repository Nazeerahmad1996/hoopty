import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';
import { Container, Toast, Content, Input, Item, Button, Text, Right } from 'native-base';
export default class Schedule extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#fff', paddingTop: 35, paddingBottom: 15, }}>
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
                                Schedule
            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 10 }}>
                        <View style={styles.ScrollView}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', padding: 20 }}>
                                    <TouchableOpacity>
                                        <Icon.Ionicons
                                            name='ios-arrow-back'
                                            size={30}
                                            style={{ fontWeight: '500' }}
                                        />
                                    </TouchableOpacity>

                                    <View style={{ flex: 1, alignItems: 'center', marginRight: 3 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '500', textDecorationLine: 'underline' }}>This week</Text>
                                    </View>

                                    <TouchableOpacity>
                                        <Icon.Ionicons
                                            name='ios-arrow-forward'
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 5, paddingBottom: 20 }}>

                                    <View style={{ flex: 1, justifyContent: 'center', }}>
                                        <Text style={styles.CalenderText}>WED</Text>
                                        <Text style={styles.CalenderText2}>7</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={styles.CalenderText}>THU</Text>
                                        <Text style={styles.CalenderText2}>8</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', }}>
                                        <Text style={styles.CalenderText}>FRI</Text>
                                        <View style={styles.CalenderText2Background}>
                                            <Text style={styles.CalenderText3}>9</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={styles.CalenderText}>SAT</Text>
                                        <Text style={styles.CalenderText2}>10</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={styles.CalenderText}>SUN</Text>
                                        <Text style={styles.CalenderText2}>11</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={styles.CalenderText}>MON</Text>
                                        <Text style={styles.CalenderText2}>12</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: '7%',
                                paddingRight: '7%'
                            }}>
                                <View
                                    style={{
                                        borderBottomColor: '#D8D8D8',
                                        borderBottomWidth: 1,
                                        width: '100%',
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>June 9th to 13th confirmed appointments Scheduled shift: <Text style={{ color: '#FF7770', fontSize: 14, fontWeight: 'bold' }}>6:00 AM to 6:00 PM</Text></Text>

                                <View style={{ paddingBottom: 15, paddingTop: 25 }}>
                                    <TouchableOpacity
                                        style={styles.Chatbtn}
                                    >
                                        <Text style={styles.btnText}>
                                            Request change
              </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: 18 }}>
                            <View
                                style={{
                                    borderBottomColor: '#D8D8D8',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 5,
                                    flex: 1,
                                }}
                            />

                            <Text style={{ color: '#909095', fontSize: 12, fontWeight: 'bold', padding: 5, marginBottom: -6 }}>Start of day</Text>

                            <View
                                style={{
                                    borderBottomColor: '#D8D8D8',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 5,
                                    flex: 1,
                                }}
                            />



                        </View>


                        <Text style={{ color: '#909095', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>13 appointments total</Text>



                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: '#cbc9d5', fontSize: 19, fontWeight: 'bold' }}>3:00 PM</Text>

                            <View style={{ flex: 1, paddingLeft: 15 }}>

                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderLeftColor: '#48aaff', borderLeftWidth: 10, marginBottom: 15 }}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 5, paddingLeft: 3 }}>3:24 PM <Text style={{ fontSize: 20, fontWeight: '900' }}>·</Text></Text>
                                    <Text style={{ color: '#909095', fontSize: 11, paddingRight: 15, width: '64%' }}>Oil change service 2007 Jeep Wrangler</Text>

                                </View>

                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderLeftColor: '#48aaff', borderLeftWidth: 10, marginBottom: 15 }}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 5, paddingLeft: 3 }}>3:24 PM <Text style={{ fontSize: 20, fontWeight: '900' }}>·</Text></Text>
                                    <Text style={{ color: '#909095', fontSize: 11, paddingRight: 15, width: '64%' }}>Oil change service 2007 Jeep Wrangler</Text>

                                </View>

                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderLeftColor: '#48aaff', borderLeftWidth: 10, marginBottom: 15 }}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 5, paddingLeft: 3 }}>3:24 PM <Text style={{ fontSize: 20, fontWeight: '900' }}>·</Text></Text>
                                    <Text style={{ color: '#909095', fontSize: 11, paddingRight: 15, width: '64%' }}>Oil change service 2007 Jeep Wrangler</Text>

                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10,marginBottom:10}}>
                            <View
                                style={{
                                    borderBottomColor: '#D8D8D8',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 5,
                                    flex: 1,
                                }}
                            />

                            <Text style={{ color: '#909095', fontSize: 12, fontWeight: 'bold', padding: 5, marginBottom: -6 }}>End of day</Text>

                            <View
                                style={{
                                    borderBottomColor: '#D8D8D8',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 5,
                                    flex: 1,
                                }}
                            />



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
        borderRadius: 15,
        // height: 600,
        width: '100%'
    },
    BoxinScroll: {
        backgroundColor: '#D8D8D8',
        width: '100%',
        height: 43,
    },
    CalenderText2: {
        textAlign: 'center',
        fontSize: 22,
        color: '#000000'
    },
    CalenderText3: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        backgroundColor: '#007AFF',
        borderRadius: 100,
        width: 28
    },
    CalenderText: {
        textAlign: 'center',
        fontSize: 11,
        color: '#404a59',
        fontWeight: '500',

    },
    CalenderText2Background: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Chatbtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 25,
        padding: 11,
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 17,
        paddingRight: '15%',
        paddingLeft: '15%'
    }
});
