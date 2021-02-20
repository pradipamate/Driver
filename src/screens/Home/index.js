import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
  Alert,
  FlatList,
  Switch,
  BackHandler,
  DeviceEventEmitter
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {DrawerActions} from 'react-navigation-drawer';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../../Components/Loader';
import firebase from 'firebase';
// import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";  
// import GPSState from 'react-native-gps-state';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';


Geocoder.init('AIzaSyBxPqdmg2ouIJZs4SKNHC3N2Qbi7mdboFY');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      isModalVisible: false,
      latitude: 18.455,
      longitude: 75.45,
      data: [
        {
          id: 1,
          tname: 'Mrs.Emma watson',
          sname: 'English',
          perpose: 'English Assignment  ',
          time: '8:30 AM',
        },
        {
          id: 2,
          tname: 'Mrs.Kylie jennar',
          sname: 'Math',
          perpose: 'Assignment for Math',
          time: '9:30 AM',
        },
        {
          id: 3,
          tname: 'Mrs.ketty perrie',
          sname: 'Scince',
          perpose: 'Science Assignment  ',
          time: '10:30 AM',
        },
        {
          id: 4,
          tname: 'Mrs.hillary clinton',
          sname: 'History',
          perpose: 'History Assignment',
          time: '11:30 AM',
        },
        {
          id: 5,
          tname: 'Mr.John Doe',
          sname: 'Geography',
          perpose: 'Geography Assignment',
          time: '12:30 AM',
        },
      ],
      routesData: [],
      locStart: [],
      locEnd: [],
      enabled:"",
      userName:'',
      loading:false
    };
  }

 
  readUserData=()=> {
    firebase.database().ref('new-bus-track/').on('value', function (snapshot) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",snapshot.val())
    });
}
  async componentDidMount() {
    this.setState({
      loading:true
  })
    const userName = await AsyncStorage.getItem('UserName')
    console.log("userName********----------------",userName);
    this.readUserData();
        this.setState({
          userName:userName
        })
    
  this.getRoutesData();
  
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      distanceFilter: 50,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      debug: false,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 1000,
      stopOnStillActivity: false,
    
      postTemplate: {
        lat: '@latitude',
        lon: '@longitude',
        foo: 'bar' // you can also add your own properties
      }
    });

    BackgroundGeolocation.on('location', (location) => {
      
      console.log("Location<>>>>>>>>>>",location)
    this.writeUserData(location.latitude,location.longitude)
      BackgroundGeolocation.startTask(taskKey => {
      
        BackgroundGeolocation.endTask(taskKey);
      });

    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      Actions.sendLocation(stationaryLocation);
    });

    BackgroundGeolocation.on('error', (error) => {
      console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
      console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
      console.log('[INFO] BackgroundGeolocation service has been stopped');
    });

    BackgroundGeolocation.on('authorization', (status) => {
      console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
      if (status !== BackgroundGeolocation.AUTHORIZED) {
       
      }
    });

    BackgroundGeolocation.on('background', () => {
      console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log('[INFO] App is in foreground');
    });

    BackgroundGeolocation.on('abort_requested', () => {
      console.log('[INFO] Server responded with 285 Updates Not Required');

      });

    BackgroundGeolocation.on('http_authorization', () => {
      console.log('[INFO] App needs to authorize the http requests');
    });

    BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    });
  }

  goToMap =async (item) =>{
    let waypointsArray = []
    console.log("Item",item.student_lant_long)
    Promise.all(item.student_lant_long.map(location =>{
      console.log("location>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",location);
      let loc = `${location.longitude},${location.latitude}`
      waypointsArray.push(loc);
    }))
    .then(() =>{  
      let str = waypointsArray.join('|')
      console.log("Strimn<<<<<<<<<<<<<<<<",str)
      console.log("Item<<<<<<<<<<<<<<<<",item)
     const url  = `https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=${item.start_lat},${item.start_lon}&waypoints=${str}&destination=${item.end_lat},${item.end_lon}`
    //  const url  = `https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=18.5913 ,73.7389&waypoints=18.4595,73.8239&destination=18.4529,73.8652`  
     Linking.openURL(url);
    })
  }

  writeUserData=async(latitude,longitute)=>{
    const uid= await AsyncStorage.getItem('id')
    console.log(" inside profile id----",uid);
    firebase.database().ref(`${uid}/`).update({
      latitude,
      longitute
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}
  getRoutesData = async () => {
    const uId = await AsyncStorage.getItem('id');
    fetch(
      'https://online-edu.in/tripmanagement/todaysrouteassign/?driver_id=' +
        uId,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          loading:false
      })
        console.log('response from driver routes', response);
        this.setState({
          routesData: response,
        });
        response.map((item, index) => {
          let res = {};
          let locinfo;
          let locinfoEnd;
          let locationArray = this.state.locStart;
          let locationEndArray = this.state.locEnd;
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.start_lat},${item.start_lon}&key=AIzaSyBxPqdmg2ouIJZs4SKNHC3N2Qbi7mdboFY`,
            )
            .then((response) => {
              console.log("Lattin))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))g",response)
              res = response;
              locinfo =
                response.data.results[0].address_components[0].short_name;
              locationArray.push(
                response.data.results[0].address_components[0].short_name,
              );
              this.setState({
                locStart: locationArray,
              });
            })
            .catch((err) => console.log(err));
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${item.end_lat},${item.end_lon}&key=AIzaSyBxPqdmg2ouIJZs4SKNHC3N2Qbi7mdboFY`,
            )
            .then((response) => {
              locinfoEnd =
                response.data.results[0].address_components[0].short_name;
              locationEndArray.push(
                response.data.results[0].address_components[0].short_name,
              );
              this.setState({
                locEnd: locationEndArray,
              });
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((error) => console.warn(error));
  };

  _handleMenu = () =>
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());

  render() {
    return (
      <>
        <Container>
          <Header style={{borderBottomWidth: 0.4, backgroundColor: '#171560'}}>
            <Left style={{marginLeft: '2%'}}>
              <TouchableOpacity onPress={this._handleMenu}>
                <Icon name="menu" style={{color: '#fff'}} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Title style={{color: '#fff', marginHorizontal: '10%', fontSize: 25}}>
              Today's Route
              </Title>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('NotificationTab')
                }>
                <Icon1
                  name="notifications-outline"
                  color="#fff"
                  size={25}
                  style={{marginRight: '5%'}}
                />
              </TouchableOpacity>
            </Right>
          </Header>
          <View>
            <ImageBackground
              source={require('../../Images/homebg.png')}
              style={{
                height: 270,
              }}>
              <View style={{marginLeft: '0%', flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: 25,
                      color: '#fff',
                      marginTop: '30%',
                      marginLeft: '15%',
                    }}>
                    {this.state.userName}
                  </Text>
                </View>

                <Image
                  square
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 60,
                    marginLeft: '10%',
                    marginVertical: '10%',
                    padding: '1%',
                  }}
                  source={{
                    uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6-x6CZ8zmUIjSWdlCpLNeoxrKVN3cdsWptg&usqp=CAU`,
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  color: '#fff',
                  marginTop: '70%',
                }}>
                The Food Store
              </Text>
            </ImageBackground>
            {/* <TouchableOpacity
              style={{
                height: '12%',
                backgroundColor: '#171560',
                marginVertical: '5%',
                marginHorizontal: '5%',
                borderRadius: 8,
                flexDirection: 'row',
                alignContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('AboutChild')}>
              <Text
                style={{
                  marginRight: '5%',
                  color: '#fff',
                  marginVertical: '3%',
                  marginHorizontal: '10%',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Today's Route
              </Text>
            </TouchableOpacity> */}
            <></>
          </View>
          <ScrollView>
            {this.state.routesData.map((item, index) => {
              //   let time=item.time

              // .finally(()=>{
              //          console.log("dsdsdsdsdqqqqqqqqqq",res.data.plus_code.compound_code)})
              //          setTimeout(function(){ console.log("startLocation>>>>>>>>>>>>>>>>>>>>>>>>>>...",locinfo ); }, 5000);
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>this.goToMap(item)}>
                    <View>
                      <CardItem style={styles.cardItem}>
                        <Left>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={styles.cardLeft}>
                              Start Time:{item.start_time}
                            </Text>
                            <Text style={styles.cardLeft}>
                              End Time:{item.end_time}
                            </Text>
                          </View>
                        </Left>
                        <Body
                          style={{
                            flexDirection: 'column',
                            marginTop: '8%',
                            marginLeft: '1%',
                          }}>
                          <View
                            style={{
                              backgroundColor: '#5C9AEE',
                              borderColor: '#5C9AEE',
                              height: 60,
                              width: 1,
                              borderRadius: 10,
                              borderWidth: 0,
                              marginLeft: '3%',
                            }}></View>
                          {/* <View 
                            style={{
                              backgroundColor: '#fff',
                              height: 12,
                              width: 12,
                              borderRadius: 6,
                              borderWidth: 1,
                              borderColor: '#5C9AEE',
                            }}></View> */}
                        </Body>
                        <Right
                          style={{flexDirection: 'column', marginLeft: '-30%'}}>
                          <Text style={styles.cardLeft}>
                            Start:{this.state.locStart[index]}
                          </Text>
                          <Text style={styles.cardLeft}>
                            End:{this.state.locEnd[index]}
                          </Text>
                        </Right>
                      </CardItem>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
          </ScrollView>
          <Loader loading={ this.state.loading }/> 

        </Container>
      </>
    );
  }
}
