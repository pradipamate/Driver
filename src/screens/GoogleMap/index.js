import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Alert,
  FlatList,
  Switch,
  Dimensions,
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
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import firebase from 'firebase';

// import BackgroundGeolocation from "react-native-background-geolocation";
// import {db} from '../../../config/firebase';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 18.771707;
const LONGITUDE = 75.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyBxPqdmg2ouIJZs4SKNHC3N2Qbi7mdboFY';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:'',
      coordinates: [
        {
          latitude: 18.44659999,
          longitude: 73.8264,
        },
        {
          latitude: 18.4489,
          longitude: 73.8456,
        },
      ],
      startData: {
        latitude: 0.0,
        longitude: 0.0,
      },
    };
    this.mapView = null;
  }
  async componentDidMount() {
    const id = await AsyncStorage.getItem('id');
    console.log('user id......', id);
    // this.setState({
    //   uid:id
    // })
    // this.readUserData(id);
  }
  onMapPress = (e) => {
    // this.setState({
    //   coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    // });
  };

  // You must remove listeners when your component unmounts

  _handleMenu = () =>
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());

  readUserData = (id) => {
    firebase
      .database()
      .ref(id)
      .on('value', function (snapshot) {
        console.log(
          '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
          snapshot.val(),
        );
        console.log("latitude>>>>>",snapshot.val().latitude,)
        // this.setState({
        //   startData: {
        //     latitude: snapshot.val().latitude,
        //     longitude: snapshot.val().longitude,
        //   },
        // });
      });
  };

  render() {
    console.log("starting points>>>>>>>>",this.state.startData)
    let data = this.props.navigation.getParam('item', '');
    console.log('data<<<', data);
    let lat=parseFloat(data.start_lat);
    let lon=parseFloat(data.start_lon);
    let endData = {
      latitude: data.end_lat,
      longitude: data.end_lon,
    };
console.log("starting points>>>>>>>>",this.state.startData);
let startLat=0.0;
let startlon=0.0;
firebase
.database()
.ref(12)
.on('value', function (snapshot) {
  console.log(
    '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
    snapshot.val(),
  );
  console.log("latitude>>>>>#################################",snapshot.val().latitude)
  startLat = snapshot.val().latitude;
  startlon = snapshot.val().longitude;
  // this.setState({
  //   startData: {
  //     latitude: snapshot.val().latitude,
  //     longitude: snapshot.val().longitude,
  //   },
  // });
});
console.log("latuuuu",startLat);
    return (
      <Container>
        <Header style={{borderBottomWidth: 0.4, backgroundColor: '#171560'}}>
          <Left style={{marginLeft: '2%'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BusStatus')}>
              <Icon
                name="arrow-back"
                size={25}
                style={{padding: 0, color: '#fff'}}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color: '#fff'}}>Bus Tracking</Title>
          </Body>
        </Header>

        <MapView
          // initialRegion={{
          //   latitude: LATITUDE,
          //   longitude: LONGITUDE,
          //   latitudeDelta: LATITUDE_DELTA,
          //   longitudeDelta: LONGITUDE_DELTA,
          // }}
          style={StyleSheet.absoluteFill}
          ref={(c) => (this.mapView = c)}
          onPress={this.onMapPress}
          zoomControlEnabled={true}>
          {/* {this.state.coordinates.map((coordinate, index) => ( */}
            <MapView.Marker
              // key={`coordinate_${index}`}
              coordinate={{ latitude: 18.44659999,
                longitude: 73.8264}}
            />
            
           {/* ))} */}

          <MapViewDirections
            // origin={{latitude:startLat ,longitude:startlon}}
            // destination={{latitude:lat,longitude:lon}}
            origin={{latitude:lat,longitude:lon}}
            destination={{ latitude: 18.44659999,
              longitude: 73.8264}}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="green"
            // zoomControlEnabled='true'
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`,
              );
            }}
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        </MapView>
        <TouchableOpacity
          style={{
            height: '6%',
            backgroundColor: '#171560',
            marginTop: '160%',
            marginHorizontal: '20%',
            borderRadius: 8,
            flexDirection: 'row',
            alignContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('HomePage')}>
          <Text
            style={{
              marginRight: '5%',
              color: '#fff',
              marginVertical: '3%',
              marginHorizontal: '30%',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            End Ride
          </Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
