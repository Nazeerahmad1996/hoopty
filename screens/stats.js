import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { Container, Toast, Content, Input, Item, Button, Text, Right } from 'native-base';
export default class Stats extends React.Component {
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
                                Stats
            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 25 }}>
                        <View style={styles.ScrollView}>
                            <View style={{ padding: 20 }}>
                                <View style={styles.BoxinScroll}>

                                </View>
                                <View
                                    style={{
                                        borderBottomColor: '#D8D8D8',
                                        borderBottomWidth: 1,
                                        width: '100%',
                                        marginTop:15,
                                    }}
                                />
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
        height: 600,
        width: '100%'
    },
    BoxinScroll: {
        backgroundColor: '#D8D8D8',
        width: '100%',
        height: 43,
    }
});
