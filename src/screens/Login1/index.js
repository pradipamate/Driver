import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch ,TextInput,} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
// import styles from './styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';


import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class Login1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
            email:""
          
        }
       
    }
    onEmailVerify=()=>{
        console.log(this.state.email)
        fetch("https://online-edu.in/users/password/reset/", {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                   
                },
                body: JSON.stringify({
                    email: this.state.email,
                    })
                })
                .then(response => response.json())
                .then((response) => {
                    console.log(response);
                    this.props.navigation.navigate('ValidateOtp',{email:response.email})

                   
                })
                .catch((error) => {
                    console.error(error);
                })
 }

    render() {
     
        return (
            <Container>
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
                    onChangeText = {(email)=>this.setState({email:email})}/>
                    
               
                    
                </View>
               
               
                <TouchableOpacity style={{height:'8%',backgroundColor:'#171560',marginVertical:'1%',marginHorizontal:'12%',borderRadius:35,flexDirection:'row',alignContent:'center',marginTop:'10%'}}
                        onPress={this.onEmailVerify
                            // () => 
                            // this.props.navigation.navigate('ValidateOtp')
                        }
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'35%',fontWeight:'bold',fontSize:24}}>
                            Continue
                        </Text>
                    </TouchableOpacity>
               
               
            </Container>

        )
    }

}