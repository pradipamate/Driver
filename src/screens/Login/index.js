import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Alert, FlatList, Switch ,TextInput,} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';    
import Loader from '../../Components/Loader';



import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
            email:"",
            password:"",
            loading:false
          
        }
       
    }
    onLogin=()=>{
        console.log("here from login")
        this.setState({
            loading:true
        })
        // Alert.alert(this.state.email,this.state.password)
        console.log(this.state.email,this.state.password)
        // fetch('a9b68c2cff1f.ngrok.io/rest-auth/login/', {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "email": this.state.email,
        //         "password": this.state.password
        //       })
        //     })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     // Alert.alert(responseJson)
        //     console.log(responseJson)
        // })
        // .catch((error) => {
        // console.error(error);
        // });

        fetch("https://online-edu.in/rest-auth/login/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    group_id:9
                    })
                })
                .then(response => response.json())
                .then(async (response) => {
                    this.setState({
                        loading:false
                    })
                    if(response.key){
                        console.log("response...",response);
                        this.storeData(response);
                        this.props.navigation.navigate('HomePage')
                    }else{
                        Alert.alert("Enter Valid Credentials..");
                    }
                    this.onRegisterFcm()
                })
                .catch((error) => {
                    console.error(error);
                })
 }
    
 onRegisterFcm=async()=>{  
       
    let fcmToken=await AsyncStorage.getItem('fcmToken')
    console.log("fcmToken???",fcmToken);
    let sid=await AsyncStorage.getItem('sid');
    let id=await AsyncStorage.getItem('id');


fetch("https://online-edu.in/notifications/api/registeredusers/", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        
        },
        body: JSON.stringify({
            registration_id: fcmToken ,
            windows_android_apple:"2",
            group_id:6,
            school_id: sid,
            student_id: id
           
            })
        })
        .then(response => response.json())
        .then((response) => {
          
            console.log("Register Fcm..ress",response)
            this.storeData1(response);
          
        })
        .catch((error) => {
            console.error(error);
        })

        
}


storeData1 = async (response) => {
    try {
        await AsyncStorage.setItem('RegNum', JSON.stringify(response.id));
        
    } catch (e) {
    }
}


 storeData = async (response) => {
    try {
        console.log("response in login-----------------------------",response);
        console.log("*****************response.user.first_name ",response.user.first_name );
        await AsyncStorage.setItem('id', JSON.stringify(response.user_detail[0].pk));
        await AsyncStorage.setItem('UserName', response.user.first_name );
        await AsyncStorage.setItem('token',  JSON.stringify(response.key));
    } catch (e) {
    // saving error
    }
}
    render() {
     
        return (
            <ScrollView>
            <Container>
            <Loader loading={ this.state.loading }/> 
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#171560'}}>
                    <Left/>
                    <Body>
                        <Title style={{ color: '#fff',fontSize:25,marginLeft:'15%' }}>Login</Title>
                    </Body>
                   
                </Header>
                <View style={{flexDirection:'column',margin:'5%'}}>
                <Icon1 name='account-circle' style={{ color: '#171560',marginHorizontal:'25%',marginBottom:'10%' }} size={180} />
                <Text style={{marginVertical:'5%'}}>Email</Text>
                <TextInput 
                    style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                    underlineColorAndroid = "transparent"
                    placeholder = "  Example@gmail.com"
                    placeholderTextColor = "#171560"
                    autoCapitalize = "none"
                    onChangeText = {(email)=>{this.setState({email:email})}}/>

                <Text style={{marginVertical:'5%'}}>Password</Text>
                <TextInput 
                    style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                    underlineColorAndroid = "transparent"
                    placeholder = "  *******"
                    placeholderTextColor = "#999"
                    autoCapitalize = "none"
                    secureTextEntry={true}
                    onChangeText = {(pw)=>{this.setState({password:pw})}}/>
                </View>
                <TouchableOpacity style={{marginVertical:'-2%',marginHorizontal:'5%',borderRadius:35,flexDirection:'row',alignContent:'center'}}
                        //  onPress={ 
                        //       this.props.navigation.navigate('Login1')
                        //     }
                            >
                        <Text  style={{marginRight:'5%',color:'#171560',marginVertical:'0%',marginHorizontal:'60%',fontSize:14}}
                    //     onPress={() =>
                    //          this.props.navigation.navigate('Login1')
                    // }
                        >
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>
               
                <TouchableOpacity style={{height:'8%',backgroundColor:'#171560',marginVertical:'1%',marginHorizontal:'12%',borderRadius:35,flexDirection:'row',alignContent:'center',marginTop:'10%'}}
                        onPress={ 
                            //  ()=>
                             this.onLogin
                            //    this.props.navigation.navigate('HomePage')
                        }
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'40%',fontWeight:'bold',fontSize:24}}>
                            Login
                        </Text>
                    </TouchableOpacity>
            </Container>
            </ScrollView>
        )
    }

}