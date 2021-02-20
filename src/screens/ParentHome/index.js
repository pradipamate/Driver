import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity,Image, AsyncStorage,ImageBackground, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default class ParentHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
            data: [
                {
                    id: 1,
                    cname: 'John Doe',
                    class:'2nd standard',
                    attendace:'80%'
                    
                    
                },
                {
                    id: 2,
                    cname: 'Emma watson',
                    class:'4th standard',
                    attendace:'70%'
                    
                    
                },
           
           
                
            ]
           
        }
    }
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
   
    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity style={{marginHorizontal:'4%',borderRadius:15,marginVertical:'2%'}}
                onPress={() => this.props.navigation.navigate('HomePage')}>
                
                    <Card style={{borderRadius:20}}>
                        
                        <CardItem style={styles.cardItem}>
                           
                            <Left style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft2}>{item.cname}</Text>
                                <Text style={styles.cardLeft4}>{item.class}</Text>
                                <Text style={styles.cardLeft4}>Attendance {item.attendace}</Text>

                            </Left>
                            {/* <Body></Body> */}
                            <Right>
                                <Icon2 name='account-circle' color='#171560' size={80} style={{marginRight:'5%'}} />
                            </Right>
                        </CardItem>
                        
                        
                    </Card>
                </TouchableOpacity>
            </>
        );

    };
    render() {
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#171560'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                            onPress={this._handleMenu}>
                            <Icon name='menu' style={{ color: '#fff' }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff',marginLeft:'45%',fontSize:25 }}>Home </Title>
                    </Body>
                    <Right>
                    <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('NotificationTab')}>
                         <Icon1 name='notifications-outline' color='#fff' size={25} style={{marginRight:'5%'}} />
                        </TouchableOpacity>
                    </Right>
                   
                </Header>
                <View>
                <ImageBackground
                   
                    source={require('../../Images/homebg.png')}
                    style={{
                         height: 260,
                      
                    }}>
                        <View style={{marginLeft:'0%',flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{ textAlign: 'left', fontSize: 20, color: '#fff', marginTop: '40%',marginLeft:'15%' }}>
                                  Your </Text>
                                <Text style={{ textAlign: 'left',fontWeight:'bold', fontSize: 25, color: '#fff', marginTop: '0%',marginLeft:'15%' }}>
                                  Childerens</Text>
                            </View>

                                
                            </View>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: '#fff', marginTop: '70%' }}>The Food Store</Text>
                  
                </ImageBackground>
                
                <FlatList
                    style={{ marginHorizontal: '2%', marginTop: '6%' }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}></FlatList>
                   
                </View>
                
            </Container>
        )
    }

}