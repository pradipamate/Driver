import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker'
import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class Assignment extends Component {
    constructor(props) {
        super(props);
         this.state = {
            value: false,
            date:'',
            isModalVisible: false,
            data: [
                {
                    id: 1,
                    tname: 'Mrs.Emma watson',
                    sname:'Assignment 1',
                    perpose:'English Assignment  ',
                    time:'8:30 AM',
                    duedate:'8 Aug 2020'
                    
                },
                {
                id: 2,
                tname: 'Mrs.Kylie jennar',
                sname:'Assignment 2',
                perpose:'Assignment for Math',
                time:'9:30 AM',
                duedate:'10 Aug 2020'

                
            },
            
                
            ]
        }
       
    }
    

    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity style={{marginHorizontal:'4%',borderRadius:15,marginVertical:'2%',marginTop:'5%'}} onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <Card style={{borderRadius:20}}>
                        
                        <CardItem style={styles.cardItem}>
                           
                            <Right style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft2}>{item.sname}</Text>
                                {/* <Text style={styles.cardLeft}>{item.tname}</Text> */}
                                <Text style={styles.cardLeft}>{item.perpose}</Text>
                                <Text style={styles.cardLeft4}>Due Date :{item.duedate}</Text>

                                <Text style={styles.cardLeft5}>Remark:remark Details</Text>
                               
                            </Right>
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#fff' }}>

                            <>
                                <Button style={{ width: '50%', backgroundColor: '#5C9AEE', borderRadius: 45, marginRight: '3%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff', }}>Preview</Text>
                                </Button>
                                



                            </>

                        </CardItem>

                        
                    </Card>
                </TouchableOpacity>
            </>
        );

    };
    
    

   
    render() {
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#5C9AEE'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomePage')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Assignments/Homework</Title>
                    </Body>
                   
                </Header>
                <TouchableOpacity style={{height:'7%',backgroundColor:'#5C9AEE',marginVertical:'5%',marginTop:'8%',marginHorizontal:'5%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'10%',fontWeight:'bold',fontSize:20}}>Today's Assignments</Text>

                    </TouchableOpacity>
                    
                   
                <FlatList
                    style={{ flex: 1, marginHorizontal: '2%', marginTop: '1%' }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}></FlatList>
                    
                    <Button style={{ width: '60%', backgroundColor: '#5C9AEE', borderRadius: 45, marginRight: '3%',marginVertical:'4%',marginHorizontal:'20%' }}
                        onPress={() => this.props.navigation.navigate('PastAssignments')}>
                        <Text style={{ marginLeft: '15%', fontWeight: 'bold', fontSize: 14, color: '#fff', }}>Past Assignments</Text>
                    </Button>
            </Container>
        )
    }

}