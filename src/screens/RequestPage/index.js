import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
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
import DropDownPicker from 'react-native-dropdown-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';    
import Loader from '../../Components/Loader'

export default class RequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isModalVisible: false,
      subject:"",
      loading:false,
    };
  }

  onRaiseRequest = async () =>{
      this.setState({
          loading:true
      })
      console.log('on data',this.state.value)
      console.log('on Subject data',this.state.subject)
      const uid= await AsyncStorage.getItem('id')
      const School_id= await AsyncStorage.getItem('School_id')
      console.log("Id",uid);
      console.log("School Id",School_id);
      fetch("https://online-edu.in/hr/api/requestfromuser/", {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subject: this.state.subject,
            comment:this.state.value,
            school_id:School_id,
            staff_id:uid,
            staff_or_parent_or_student:"0"
            })
        })
        .then(response => response.json())
        .then((response) => {
            this.setState({loading:false})
            console.log(response);
            this.props.navigation.navigate('ProfilePage')
        })
        .catch((error) => {
            console.error(error);
        })
    // () => this.props.navigation.navigate('ProfilePage')
  }

  render() {
    return (
      <Container>
         <Loader loading={ this.state.loading } />
        <Header style={{borderBottomWidth: 0.4, backgroundColor: '#171560'}}>
          <Left style={{marginLeft: '2%'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProfilePage')}>
              <Icon name="arrow-back" style={{color: '#fff'}} />
            </TouchableOpacity>
          </Left>
          <Body style={{marginHorizontal: '30%'}}>
            <Title style={{color: '#fff'}}>Request</Title>
          </Body>
        </Header>
        <ScrollView>
          <>
            <View style={{flex: 1, marginHorizontal: '4%', marginTop: '10%'}}>
            <Text
                style={{
                  color: '#333',
                  marginVertical: '3%',
                  marginHorizontal: '5%',
                  fontWeight: 'bold',
                  fontSize:15,
                }}>
               Subject
              </Text>
              <TextInput
                value={this.state.subject}
                onChangeText={(subject) => this.setState({subject:subject})}
                // placeholder={'UserName'}
                style={{
                  marginLeft:'5%',
                  marginVertical: '5%',
                  marginHorizontal: '5%',
                  padding: '2%',
                  borderWidth: 0.5,
                }}
              />
              <Text
                style={{
                  color: '#333',
                  marginVertical: '3%',
                  marginHorizontal: '5%',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Comment
              </Text>
              <TextInput
                style={{
                  marginHorizontal: '5%',
                  borderWidth: 0.5,
                  marginVertical: '5%',
                  padding: '2%',
                }}
                value={this.state.value}
                onChangeText={(text) => this.setState({value: text})}
                multiline={true}
                numberOfLines={10}
              />
            </View>
          </>
        </ScrollView>

        <TouchableOpacity
          style={{
            height: '6%',
            width: '60%',
            backgroundColor: '#171560',
            marginVertical: '3%',
            marginHorizontal: '20%',
            borderRadius: 30,
            flexDirection: 'row',
            alignContent: 'center',
          }}
          onPress={ this.onRaiseRequest}>
          <Text
            style={{
              color: '#fff',
              marginVertical: '2%',
              marginHorizontal: '34%',
              fontWeight: 'bold',
              fontSize: 22,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
