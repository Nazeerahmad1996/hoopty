import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';
import { Container, Header, Content, Form, Item, Input, Text } from 'native-base';
export default class PaymentMethod extends React.Component {
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
                                Payment
            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 25 }}>
                        <View style={styles.ScrollView}>
                            <View style={{ padding: 20 }}>
                                <Text style={styles.paymentMethodText}>Add a Payment Method</Text>

                                <Item style={styles.ItemView}>
                                    <Input
                                        style={styles.InputStyle}
                                        placeholderTextColor='#727272'
                                        placeholder="Account holder's full name" />
                                </Item>
                                <Item last style={styles.ItemView}>
                                    <Input
                                        style={styles.InputStyle}
                                        placeholder="Routing number"
                                        placeholderTextColor='#727272' />
                                </Item>
                                <Item style={styles.ItemView}>
                                    <Input
                                        style={styles.InputStyle}
                                        placeholderTextColor='#727272'
                                        placeholder="Account number" />
                                </Item>
                                <Item last style={styles.ItemView}>
                                    <Input
                                        style={styles.InputStyle}
                                        placeholder="Confirm account number"
                                        placeholderTextColor='#727272' />
                                </Item>

                                <View style={{ paddingLeft: '10%', paddingRight: '10%', paddingBottom: 12, paddingTop: 50 }}>
                                    <TouchableOpacity
                                        style={styles.Submitbtn}
                                    >
                                        <Text style={styles.btnText}>
                                            Submit
              </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
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
        height: 500,
        width: '100%'
    },
    BoxinScroll: {
        backgroundColor: '#D8D8D8',
        width: '100%',
        height: 43,
    },
    paymentMethodText: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 50,
    },
    ItemView: {
        marginTop: 20,
    },
    Submitbtn: {
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
    },
    InputStyle: {
        fontSize: 17,
        marginBottom: -5,
        fontWeight: '400'
    }
});
