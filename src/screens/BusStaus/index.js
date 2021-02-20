import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage,StyleSheet, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import MapView from 'react-native-maps';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class BusStatus extends Component {
    constructor(props) {
        super(props);
        this.state={
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
        }
       
    }
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    onRegionChange(region) {
        this.setState({ region });
      }
    render() {
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#EB7F70'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomePage')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Bus Status</Title>
                    </Body>
                   
                </Header>
                <View style={{flexDirection:"column"}}>
                    <Text style={{textAlign:'left',marginTop:'5%',fontSize:22,fontWeight:'bold',marginLeft:'8%'}}>Be Ready </Text>
                    <Text style={{textAlign:'left',fontSize:18,color:'#999',marginLeft:'8%'}}>Your Bus will arrive soon </Text>

                </View>
                <Card style={{ backgroundColor:'#EB7F70',height:'35%',width:'85%',alignSelf:'center',marginTop:'5%'}}>
                            
                                <CardItem style={{ backgroundColor:'#EB7F70',alignItems:'flex-start',flexDirection:'column',marginTop:'5%'}}>
                                    <Text style={{color:'#fff',fontSize:26,fontWeight:'bold'}}>Bus Details</Text>
                                    <Text style={{color:'#fff',fontSize:15,marginVertical:'2%'}}>Number of Students Travelling: 25</Text>
                                    <Text style={{color:'#fff',fontSize:15,marginVertical:'2%'}}>Bus Number: MH14 HW 2079</Text>
                                    <Text style={{color:'#fff',fontSize:15,marginVertical:'2%'}}>Bus Driver Number:7786547899</Text>
                                    <Text style={{color:'#fff',fontSize:15,marginVertical:'2%'}}>Emergency Number:7789776780</Text>
                                    
                                </CardItem>
                </Card>
                <TouchableOpacity style={{height:'8%',backgroundColor:'#EB7F70',marginTop:'8%',marginHorizontal:'8%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
                        onPress={() => this.props.navigation.navigate('GoogleMap')}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'25%',fontWeight:'bold',fontSize:20}}>Track Your Bus</Text>
                    </TouchableOpacity>
               
            </Container>
        )
    }

}