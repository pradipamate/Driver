import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class Events extends Component {
    constructor(props) {
        super(props); this.state = {
            value: false,
            isModalVisible: false,
            data: [
                {
                    id: 1,
                    tname: 'Mrs.Emma watson',
                    sname:'English',
                    perpose:'English Assignment  ',
                    time:'8:30 AM',
                    duedate:'8 Aug 2020'
                    
                },
                {
                id: 2,
                tname: 'Mrs.Kylie jennar',
                sname:'Math',
                perpose:'Assignment for Math',
                time:'9:30 AM',
                duedate:'10 Aug 2020'

                
            },
            {
                id: 3,
                tname: 'Mrs.ketty perrie',
                sname:'Scince',
                perpose:'Science Assignment  ',
                time:'10:30 AM',
                duedate:'4 Aug 2020'

                
            },
            {
                id: 4,
                tname: 'Mrs.hillary clinton',
                sname:'History',
                perpose:'History Assignment',
                time:'11:30 AM',
                duedate:'18 Aug 2020'

                
            },
            {
                id: 5,
                tname: 'Mr.John Doe',
                sname:'Geography',
                perpose:'Geography Assignment',
                time:'12:30 AM',
                duedate:'12 Aug 2020'

                
            },
                
            ]
        }
       
    }
    

    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <Card >
                        
                        <CardItem style={styles.cardItem}>
                           
                            <Right style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft2}>{item.sname}</Text>
                                {/* <Text style={styles.cardLeft}>{item.tname}</Text> */}
                                <Text style={styles.cardLeft}>{item.perpose}</Text>
                                <Text style={styles.cardLeft4}>Due Date :<Text style={{color:'#E67A8E'}}>{item.duedate}</Text></Text>

                               
                            </Right>
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#fff' }}>

                            <>
                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '3%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff', }}>Preview</Text>
                                </Button>
                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '3%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff',textAlign:'center' }}>Upload</Text>
                                </Button>



                            </>

                        </CardItem>

                        
                    </Card>
                </TouchableOpacity>
            </>
        );

    };
    
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    
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
                        <Title style={{ color: '#fff' }}>Homework/Exam</Title>
                    </Body>
                   
                </Header>
                <TouchableOpacity style={{height:'8%',backgroundColor:'#E67A8E',marginVertical:'5%',marginTop:'8%',marginHorizontal:'5%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
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