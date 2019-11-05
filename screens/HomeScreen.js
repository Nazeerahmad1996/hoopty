import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons';
import Modal from "react-native-modal";
import { MonoText } from '../components/StyledText';
import Modalnotification from '../components/NotificationModal';
import WorkOrder from '../components/WorkorderModal';




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isModalVisible: false,
  };

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });


  constructor(props) {
    super(props);
    this.state = {
      isEmpty: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Modal backdropOpacity={0.55} style={{ flex: 1 }} isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}>

            <WorkOrder CloseModal={this._toggleModal.bind(this)} visible={this.state.isModalVisible} />

          </Modal>
        </View>
        <View style={{ backgroundColor: '#fff', paddingTop: 35, }}>
          <View style={{ flexDirection: 'row', padding: 18 }}>
            <View style={{ flex: 1 }}>
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
                  marginTop: 10,
                }}
              >
                <Icon.Entypo
                  name='menu'
                  size={26}
                  color="#fff"

                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.insertpartnerText}>Hi,  insertpartner name</Text>
              <Text style={styles.BriefText}>Today's Brief</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', paddingTop: 30, paddingBottom: 20 }}>

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

        {this.state.isEmpty ? (
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: -20, flex: 1, }}>
            <View style={styles.ScrollView}>
              <View style={styles.noAppointmentCard}>
                <Text style={styles.AppointText}>Currently no appointments</Text>
                <View
                  style={{
                    borderBottomColor: '#E3EAFC',
                    marginTop: 15,
                    marginLeft: 25,
                    marginRight: 25,
                    borderBottomWidth: 1.5,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ padding: 16 }}>
                <Text style={styles.NextText}>Up Next</Text>
                <View style={{ alignItems: 'flex-end', marginBottom: -20, marginRight: -13, zIndex: 5 }}>
                  <TouchableOpacity
                    style={styles.Chatbtn}
                  >
                    <Text style={styles.btnText}>
                      Navigate
              </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.CardView}>
                  <View style={{}}>
                    <Image style={{ width: '100%', height: 120 }} source={require('../assets/images/map.png')} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.OrangeText}>Oil Change</Text>
                    <Text style={styles.DetailTitle}> - 2007 Jeep Wrangler</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon.AntDesign
                      name='calendar'
                      size={16}
                      style={{ marginTop: 1 }}

                    />
                    <Text style={styles.date}> Fri - Mar 29 2019 . 3:24PM</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('WorkOrder')} style={styles.Detailsbtn}>
                    <Text>Tap for details</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.TimeText}>4:00 PM</Text>
                <View style={styles.CardView}>
                  <View style={{}}>
                    <Image style={{ width: '100%', height: 120 }} source={require('../assets/images/map.png')} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.OrangeText}>Oil Change</Text>
                    <Text style={styles.DetailTitle}> - 2007 Jeep Wrangler</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon.AntDesign
                      name='calendar'
                      size={16}
                      style={{ marginTop: 1 }}

                    />
                    <Text style={styles.date}> Fri - Mar 29 2019 . 3:24PM</Text>
                  </View>
                  <TouchableOpacity onPress={this._toggleModal} style={styles.Detailsbtn}>
                    <Text>Tap for details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFF2',
  },
  ScrollView: {
    backgroundColor: '#EEEFF2',
    flex: 1,
    paddingBottom: 20,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  insertpartnerText: {
    fontWeight: '600',
    fontSize: 17,
  },
  BriefText: {
    fontWeight: '900',
    color: '#C7C7CC',
    fontSize: 31
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
  noAppointmentCard: {
    height: 350,
    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  AppointText: {
    marginLeft: 25,
    fontSize: 25,
    color: '#000000',
    fontWeight: '700'
  },
  CardView: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
  },
  Detailsbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 13,
  },
  Detailsbtn2: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
  },
  NextText: {
    fontSize: 17,
    color: '#FF3366',
    marginBottom: 7,
    fontWeight: '500'
  },
  TimeText: {
    fontSize: 17,
    marginBottom: 7,
    fontWeight: '500',
    marginTop: 15,
  },
  OrangeText: {
    color: '#FF7770',
    fontSize: 17,
    marginBottom: 7,
    fontWeight: '500'
  },
  DetailTitle: {
    fontSize: 17,
    marginBottom: 7,
    fontWeight: '500'
  },
  date: {
    fontSize: 15,
    marginBottom: 7,
    fontWeight: '500',
    marginLeft: 6,
  },
  Dismissbtn: {
    color: '#FF3366',
    fontWeight: '500',
    marginTop: 4,
    fontSize: 13
  },
  NotiText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginRight: 40,
  },
  NotiView: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    marginBottom: 8
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
  Chatbtn: {
    alignItems: 'flex-end',
    backgroundColor: '#FF3366',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  }

});
