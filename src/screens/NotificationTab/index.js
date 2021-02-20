import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class NotificationTab extends Component {
    constructor(props) {
        super(props); this.state = {
            value: false,
            isModalVisible: false,
            data: [
                {
                    id: 1,
                    tname: 'Mrs.Emma watson',
                    sname:'English',
                    perpose:'Notification Content ',
                    time:'8:30 AM',
                    duedate:'8 Aug 2020'
                    
                },
                {
                id: 2,
                tname: 'Mrs.Kylie jennar',
                sname:'Math',
                perpose:'Notification Content',
                time:'9:30 AM',
                duedate:'10 Aug 2020'

                
            },
            {
                id: 3,
                tname: 'Mrs.ketty perrie',
                sname:'Scince',
                perpose:'Notification Content ',
                time:'10:30 AM',
                duedate:'4 Aug 2020'

                
            },
            {
                id: 4,
                tname: 'Mrs.hillary clinton',
                sname:'History',
                perpose:'Notification Content',
                time:'11:30 AM',
                duedate:'18 Aug 2020'

                
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
                               
                                <Text style={styles.cardLeft}>{item.perpose}</Text>
                                <Text style={styles.cardLeft4}>Date : <Text style={{color:'#E67A8E',fontSize: 14}}>{item.duedate}</Text></Text>

                               
                            </Right>
                        </CardItem>
                    
                        
                    </Card>
                </TouchableOpacity>
            </>
        );

    };
    
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    
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
                        <Title style={{ color: '#fff' }}>Notification</Title>
                    </Body>
                   
                </Header>
               
                <FlatList
                    style={{ flex: 1, marginHorizontal: '2%', marginTop: '1%' }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}></FlatList>
               
            </Container>
        )
    }

}