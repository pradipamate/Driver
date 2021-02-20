import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage,StyleSheet, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import MapView from 'react-native-maps';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class ContactUS extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
       
    }
    

  
    render() {
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#E67A8E'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomePage')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Contact Us</Title>
                    </Body>
                   
                </Header>
                <View style={{flexDirection:"column",marginTop:'8%'}}>
                    <Text style={{textAlign:'left',marginTop:'5%',fontSize:18,fontWeight:'bold',marginLeft:'8%',color:'#E67A8E'}}>Addresss </Text>
                    <Text style={{textAlign:'left',fontSize:14,color:'#454545',marginLeft:'8%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>

                </View>
                <View style={{flexDirection:"column",marginTop:'5%'}}>
                    <Text style={{textAlign:'left',marginTop:'5%',fontSize:18,fontWeight:'bold',marginLeft:'8%',color:'#E67A8E'}}>Contact Number </Text>
                    <Text style={{textAlign:'left',fontSize:14,color:'#454545',marginLeft:'8%'}}>7878780985 / 8976590879 </Text>

                </View>
                <View style={{flexDirection:"column",marginTop:'5%'}}>
                    <Text style={{textAlign:'left',marginTop:'5%',fontSize:18,fontWeight:'bold',marginLeft:'8%',color:'#E67A8E'}}>Email</Text>
                    <Text style={{textAlign:'left',fontSize:14,color:'#454545',marginLeft:'8%'}}>abc@ayninfotech.com</Text>

                </View>
                <View style={{flexDirection:"column",marginTop:'4%',borderWidth:0.5,borderColor:'#999',marginHorizontal:'7%'}}>
                   
                </View>
                <View style={{flexDirection:"column",marginTop:'5%',marginRight:'4%'}}>
                    <Text style={{textAlign:'left',fontSize:14,color:'#454545',marginLeft:'8%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .
                    </Text>

                </View>
               
                
   
               
            </Container>
        )
    }

}