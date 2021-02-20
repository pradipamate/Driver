import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import { ProgressBar, Colors } from 'react-native-paper';


import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';
import styles from './styles';

export default class Curriculum extends Component {
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
                    per:'60'
                   
                    
                },
                {
                id: 2,
                tname: 'Mrs.Kylie jennar',
                sname:'Math',
                per:'70'
                
                
            },
            {
                id: 3,
                tname: 'Mrs.ketty perrie',
                sname:'Scince',
                per:'50'
               
                
            },
           
                
            ]
        }
    }
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    renderItem = ({ item }) => {
        var count=parseInt(item.per)
        var val=count/100;
        return (
            <>
           
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <View >
                        
                        <CardItem style={styles.cardItem}>
                            <Left>
                            <Text style={styles.cardLeft}> {item.sname}</Text>
                            </Left>
                            {/* <Body></Body> */}
                            <Right style={{ flexDirection: 'column',marginHorizontal:'5%'}}>
                            {/* <Text style={styles.cardLeft1}>{item.per}</Text> */}
                                {/* <ProgressBar progress={item.val} color='red' /> */}
                                <Text style={styles.cardLeft1}>{item.per}%</Text>
                               
                            </Right>
                        </CardItem>
                       

                        
                    </View>
                </TouchableOpacity>
                <ProgressBar progress={val} color='#5C9AEE' style={{marginHorizontal:'5%'}} />

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
                        <Title style={{ color: '#fff' }}>Curriculum</Title>
                    </Body>
                   
                </Header>
                <TouchableOpacity style={{flexDirection:"row",height:'8%',backgroundColor:'#5C9AEE',marginVertical:'5%',marginTop:'8%',marginHorizontal:'5%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'10%',fontWeight:'bold',fontSize:20}}>Subjects</Text>
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'10%',fontWeight:'bold',fontSize:20}}>Completed Status</Text>

                    </TouchableOpacity>
                   
                     
                <FlatList
                    style={{ flex: 1, marginHorizontal: '2%', marginTop: '1%' }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}></FlatList>
                    <Card style={{marginBottom:'80%',marginHorizontal:'20%',marginTop:'5%'}}>
                     <CardItem style={{marginHorizontal:'15%'}}>
                            <Left>
                            <Text style={styles.cardLeft2}> Total</Text>
                            </Left>
                            {/* <Body></Body> */}
                            <Right style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft3}>60%</Text>
                               
                            </Right>
                        </CardItem>
                        </Card>
               
            </Container>
        )
    }

}