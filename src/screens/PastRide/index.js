import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  Switch,
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
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Loader from '../../Components/Loader';

export default class PastRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      currentPosition: 0,
      isModalVisible: false,
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
    };
  }
  async componentDidMount() {
    this.setState({
      loading:true
  })
    this.getRoutesData();
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


  render() {
    return (
      <Container>
          <Loader loading={ this.state.loading }/> 

        <Header style={{borderBottomWidth: 0.4, backgroundColor: '#EB7F70'}}>
          <Left style={{marginLeft: '2%'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomePage')}>
              <Icon
                name="arrow-back"
                size={25}
                style={{padding: 0, color: '#fff'}}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color: '#fff'}}>Past Rides</Title>
          </Body>
        </Header>
        <ScrollView>
          {this.state.routesData.map((item, index) => (
            <>
              <TouchableOpacity
                style={{
                  marginHorizontal: '4%',
                  borderRadius: 15,
                  marginVertical: '2%',
                  marginTop: '5%',
                }}
                onPress={() =>
                  this.props.navigation.navigate('ExamDetails', {item: item})
                }>
                <Card style={{borderRadius: 20}}>
                  <CardItem style={styles.cardItem}>
                  
                    <Left style={{flexDirection: 'column', marginLeft: '-10%'}}>
                      <Text style={styles.cardLeft4}>
                        Start Time :{' '}
                        <Text style={{color: '#E67A8E'}}>
                          {item.start_time}
                        </Text>
                      </Text>
                      <Text style={styles.cardLeft4}>
                        End Time :{' '}
                        <Text style={{color: '#E67A8E'}}>{item.end_time}</Text>
                      </Text>
                      <Text style={{marginLeft: '-3%'}}>
                       No of Students:{' '}
                        <Text style={{color: '#E67A8E'}}> {item.number_of_students}</Text>
                      </Text>
                    </Left>
                    <Right style={{flexDirection: 'column'}}>
                      <Text style={styles.cardLeft}>
                        Start :{' '}
                        <Text style={{color: '#E67A8E'}}>
                          {this.state.locStart[index]}
                        </Text>
                      </Text>
                      <Text style={styles.cardLeft}>
                        End :{' '}
                        <Text style={{color: '#E67A8E'}}>
                          {this.state.locEnd[index]}
                        </Text>
                      </Text>
                      <Text >
                        {' '}
                        <Text >
                          
                        </Text>
                      </Text>
                    </Right>              
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
      </Container>
    );
  }
}
