import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Notificationmodal extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#fff', borderRadius: 20, paddingTop: 20, paddingLeft: 22, paddingRight: 22, paddingBottom: 10, marginBottom: '25%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text style={styles.Dismissbtn}>Dismiss</Text>
                    </TouchableOpacity>
                    <View style={styles.NotiView}>
                        <Text style={styles.NotiText}>Notifications</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.ModalIcons} source={require('../assets/images/exclamation.png')} />
                </View>
                <View
                    style={{
                        borderBottomColor: '#DFDFDF',
                        borderBottomWidth: 1,
                        width: '100%',
                    }}
                />
                <View>
                    <Image style={styles.ModalIcons} source={require('../assets/images/star.png')} />
                </View>
                <View
                    style={{
                        borderBottomColor: '#DFDFDF',
                        borderBottomWidth: 1,
                        width: '100%',
                    }}
                />
                <View>
                    <Image style={styles.ModalIcons2} source={require('../assets/images/user.png')} />
                </View>
                <TouchableOpacity style={styles.Detailsbtn2}>
                    <Text>Tap for details</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Dismissbtn: {
        color: '#FF3366',
        fontWeight: '500',
        marginTop: 4,
        fontSize: 13
      },
      NotiView: {
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        marginBottom: 8
      },
      NotiText: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        marginRight: 40,
      },
      ModalIcons: {
        height: 30,
        width: 30,
        marginTop: 12,
        marginBottom: 12,
      },
      ModalIcons2: {
        height: 30,
        width: 30,
        marginTop: 12,
        marginBottom: 6,
      },
      Detailsbtn2: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 13,
      },
})