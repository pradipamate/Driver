import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

import styles from './styles';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class EventsDetails extends Component {
    constructor(props) {
        super(props); this.state = {
            value: false,
            isModalVisible: false,
            data: [
                {
                    id: 1,
                    ename: 'Event 1',
                    sname:'English',
                    perpose:'Event Details ',
                    time:'8:30 AM',
                    date:'8 Aug 2020'
                    
                },
                {
                id: 2,
                ename: 'Event 2',
                sname:'Math',
                perpose:'Event Details',
                time:'9:30 AM',
                date:'10 Aug 2020'

                
            },
            {
                id: 3,
                ename: 'Event 3',
                sname:'Scince',
                perpose:'Event Details ',
                time:'10:30 AM',
                date:'4 Aug 2020'

                
            },
           
                
            ]
        }
       
    }
    

    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity style={{marginHorizontal:'3%',borderRadius:15,marginVertical:'1%',marginTop:'3%'}} onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <Card style={{borderRadius:20}} >
                        
                        <CardItem style={styles.cardItem}>
                           
                            <Right style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft2}>{item.ename}</Text>
                                {/* <Text style={styles.cardLeft}>{item.tname}</Text> */}
                                <Text style={styles.cardLeft}>{item.perpose}</Text>
                                <Text style={styles.cardLeft4}>Last date accepting event: <Text style={{color:'#E67A8E',fontSize: 14}}>{item.date}</Text></Text>

                               
                            </Right>
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#fff' }}>

                            <>
                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '2%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff', }}>Accept</Text>
                                </Button>
                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '2%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff',textAlign:'center' }}>Reject</Text>
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
                        <Title style={{ color: '#fff' }}>Events payment</Title>
                    </Body>
                   
                </Header>
                <>
           
           <TouchableOpacity style={{marginHorizontal:'5%',borderRadius:15,marginVertical:'1%',marginTop:'10%'}} onPress={() => this.props.navigation.navigate('OrdersDetails')}>
           
               <Card style={{borderRadius:20}} >
                   
                   <CardItem style={styles.cardItem}>
                      
                       <Right style={{ flexDirection: 'column' }}>
                           <Text style={styles.cardLeft2}>Event 1</Text>
                           {/* <Text style={styles.cardLeft}>{item.tname}</Text> */}
                           <Text style={styles.cardLeft}>Event Detail Description</Text>
                           <Text style={styles.cardLeft4}>Last date accepting event: <Text style={{color:'#E67A8E',fontSize: 14}}>12 Jul 2020</Text></Text>

                          
                       </Right>
                   </CardItem>
                  
                   
               </Card>
               {/* <View>
               <Rave
			    buttonText=  "Pay Now"
			    raveKey="<your-api-key-here>"
			    amount={20000}
			    billingEmail="ayoshokz@gmail.com"
			    billingMobile="08101274387"
			    billingName="Oluwatobi Shokunbi"
			    ActivityIndicatorColor="green"
			    onCancel={()=>this.onCancel()}
			    onSuccess={(tranRef)=>{alert(tranRef)}}
			    btnStyles={{backgroundColor:'green'}}
			    textStyles={{ color:'white'}}
			    onError={()=>{alert('error')}}
			    txref="1234"
			  />
            </View>
                */}
           </TouchableOpacity>
       </>
       <TouchableOpacity style={{height:'8%',backgroundColor:'#E67A8E',marginVertical:'5%',marginTop:'8%',marginHorizontal:'5%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
         onPress={() => this.props.navigation.navigate('PaymentDetails')}>

                        
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'25%',fontWeight:'bold',fontSize:20}}>Continue Payment</Text>
                    </TouchableOpacity>
                
               
            </Container>
            
        )
    }

}