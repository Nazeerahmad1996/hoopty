
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.IconView}>
          <Image style={styles.TitlePic} source={require('../assets/images/icon2.png')} />
        </View>
        <View style={styles.NotificationVIew}>
          <TouchableOpacity
            style={styles.NotificationBtn}
          >
            <Text style={styles.notificationText}>3 Notifications</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: 20 }}>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={this.navigateToScreen('Portal')}>
              <Text style={styles.sectionHeadingStyle2}>
                Hoopty Portal
            </Text>
            </TouchableOpacity>
            <View style={styles.ImageVIew}>
              <Image style={styles.portalImage} source={require('../assets/images/portal.png')} />
            </View>
          </View>
          <View style={styles.MarginView}>
            <TouchableOpacity onPress={this.navigateToScreen('Method')}>
              <Text style={styles.sectionHeadingStyle}>
                Payment
            </Text>
            </TouchableOpacity>
            <View style={styles.ImageVIew}>
              <Image style={styles.paymentImage} source={require('../assets/images/payment.png')} />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Stats')}>
              <Text style={styles.sectionHeadingStyle}>
                Stats
            </Text>
            </TouchableOpacity>
            <View style={styles.ImageVIew}>
              <Image style={styles.statsImage} source={require('../assets/images/stats.png')} />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Schedule')}>
              <Text style={styles.sectionHeadingStyle}>
                Schedule
            </Text>
            </TouchableOpacity>
            <View style={styles.ImageVIew}>
              <Image style={styles.scheduleImage} source={require('../assets/images/schedule.png')} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.logoutbtn}>
            <Image style={styles.logoutImage} source={require('../assets/images/logout.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TitlePic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 55
  },
  IconView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotificationVIew: {
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotificationBtn: {
    backgroundColor: '#C7C7CC',
    width: 280,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  notificationText: {
    fontSize: 19,
    fontWeight: '500'
  },
  sectionHeadingStyle2: {
    fontSize: 22,
    fontWeight: '600'
  },
  sectionHeadingStyle: {
    fontSize: 21,
    fontWeight: '500'
  },
  portalImage: {
    width: '85%',
    height: 90,
    marginTop: 6,
  },
  paymentImage: {
    width: '85%',
    height: 40,
    marginTop: 6,
  },
  ImageVIew: {
    marginLeft: 15,
  },
  statsImage: {
    width: '85%',
    height: 40,
    marginTop: 6,
  },
  scheduleImage: {
    width: '85%',
    height: 45,
    marginTop: 6,
  },
  MarginView: {
    marginTop: 13,
  },
  logoutText: {
    fontSize: 19,
    fontWeight: '900',
    color: '#FF3366',
  },
  logoutbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logoutImage: {
    width: 80,
    height: 25,
    marginBottom: 10,
  }
});