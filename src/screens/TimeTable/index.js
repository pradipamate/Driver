import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';


import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';




 

export default class TimeTable extends Component {
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
                    sname:'English',
                    perpose:'English Assignment  ',
                    time:'8:30 AM'
                    
                },
                {
                id: 2,
                tname: 'Mrs.Kylie jennar',
                sname:'Math',
                perpose:'Assignment for Math',
                time:'9:30 AM'
                
            },
            {
                id: 3,
                tname: 'Mrs.ketty perrie',
                sname:'Scince',
                perpose:'Science Assignment  ',
                time:'10:30 AM'
                
            },
            {
                id: 4,
                tname: 'Mrs.hillary clinton',
                sname:'History',
                perpose:'History Assignment',
                time:'11:30 AM'
                
            },
            {
                id: 5,
                tname: 'Mr.John Doe',
                sname:'Geography',
                perpose:'Geography Assignment',
                time:'12:30 AM'
                
            },
                
            ]
        }
       
    }
    

    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <View >
                        
                        <CardItem style={styles.cardItem}>
                            <Left>
                            <Text style={styles.cardLeft}>{item.time}</Text>
                            </Left>
                            <Body style={{flexDirection:'column',marginTop:'8%',marginLeft:'-25%'}}>
                            <View style={{backgroundColor:'#E67A8E',borderColor:'#E67A8E',height:60,width:1,borderRadius:10,borderWidth:0,marginLeft:'3%'}}></View>
                                
                                <View style={{backgroundColor:'#fff',height:12,width:12,borderRadius:6,borderWidth:1,borderColor:'#E67A8E'}}></View>
                                
                            </Body>
                           
                            <Right style={{ flexDirection: 'column',marginLeft:'-30%' }}>
                                <Text style={styles.cardLeft2}>{item.sname}</Text>
                                <Text style={styles.cardLeft}>{item.tname}</Text>
                                <Text style={styles.cardLeft}>{item.perpose}</Text>
                               
                            </Right>
                        </CardItem>

                        
                    </View>
                </TouchableOpacity>
            </>
        );

    };
    
    render() {
     
    var today = new Date();
    var date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+ today.getFullYear();
    console.log(date);
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
                        <Title style={{ color: '#fff' }}>Timetable</Title>
                    </Body>
                   
                </Header>
                <TouchableOpacity style={{height:'8%',backgroundColor:'#E67A8E',marginTop:'8%',marginHorizontal:'5%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'10%',fontWeight:'bold',fontSize:20}}>{date}</Text>
                    </TouchableOpacity>
                   
                <FlatList
                    style={{ flex: 1, marginHorizontal: '2%', marginTop: '1%' }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}></FlatList>
               
            </Container>
        )
    }

}