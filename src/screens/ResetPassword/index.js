import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch ,TextInput,} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';


import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
          
        }
       
    }
    

    render() {
     
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#171560'}}>
                <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ValidateOtp')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff',fontSize:25 }}>Reset Password</Title>
                    </Body>
                   
                </Header>
                <View style={{flexDirection:'column',margin:'5%'}}>
                <Text style={{marginVertical:'5%'}}>Password</Text>
                <TextInput 
                    style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                    underlineColorAndroid = "transparent"
                    placeholder = "  *******"
                    placeholderTextColor = "#999"
                    autoCapitalize = "none"
                    secureTextEntry={true}
                    onChangeText = {this.handleEmail}/>

                <Text style={{marginVertical:'5%'}}> Confirm Password</Text>
                <TextInput 
                    style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                    underlineColorAndroid = "transparent"
                    placeholder = "  *******"
                    placeholderTextColor = "#999"
                    autoCapitalize = "none"
                    secureTextEntry={true}
                    onChangeText = {this.handleEmail}/>
                </View>
                
                <TouchableOpacity style={{height:'8%',backgroundColor:'#171560',marginVertical:'1%',marginHorizontal:'12%',borderRadius:35,flexDirection:'row',alignContent:'center',marginTop:'10%'}}
                        onPress={() => this.props.navigation.navigate('Login')}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'40%',fontWeight:'bold',fontSize:24}}>
                            Save
                        </Text>
                    </TouchableOpacity>
               
               
            </Container>

        )
    }

}