import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch ,TextInput} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class PaymentDetails extends Component {
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
                        <Title style={{ color: '#fff' }}>Payment Details</Title>
                    </Body>
                   
                </Header>
                <View style={{marginHorizontal:'5%',marginVertical:'5%',flexDirection:'column'}}>
           
                    <Text style={{marginVertical:'5%',color:'#E67A8E'}}>CardHolder Name</Text>
                        <TextInput 
                            style={{borderRadius:8,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                            underlineColorAndroid = "transparent"
                            placeholder = "  "
                            placeholderTextColor = "#171560"
                            autoCapitalize = "none"
                            onChangeText = {(email)=>{this.setState({email:email})}}/>

                        <Text style={{marginVertical:'5%',color:'#E67A8E'}}>Card Number</Text>
                        <TextInput 
                            style={{borderRadius:8,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                            underlineColorAndroid = "transparent"
                            placeholder = "  "
                            placeholderTextColor = "#999"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            onChangeText = {(pw)=>{this.setState({password:pw})}}/> 

                        <View style={{flexDirection:'row',marginVertical:'5%',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'column'}}>
                                    <Text style={{marginVertical:'5%',color:'#E67A8E'}}>Card Date</Text>
                                    <TextInput 
                                        style={{borderRadius:8,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                                        underlineColorAndroid = "transparent"
                                        placeholder = " Month "
                                        placeholderTextColor = "#999"
                                        autoCapitalize = "none"
                                        secureTextEntry={true}
                                        onChangeText = {(pw)=>{this.setState({password:pw})}}/>

                            </View>
                            <View style={{flexDirection:'column'}}>
                                    <Text style={{marginVertical:'5%',color:'#E67A8E'}}>Card Year</Text>
                                    <TextInput 
                                        style={{borderRadius:8,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                                        underlineColorAndroid = "transparent"
                                        placeholder = " Year "
                                        placeholderTextColor = "#999"
                                        autoCapitalize = "none"
                                        secureTextEntry={true}
                                        onChangeText = {(pw)=>{this.setState({password:pw})}}/>

                            </View>
                            <View style={{flexDirection:'column'}}>
                                    <Text style={{marginVertical:'5%',color:'#E67A8E'}}>CVV@</Text>
                                    <TextInput 
                                        style={{borderRadius:8,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                                        underlineColorAndroid = "transparent"
                                        placeholder = "CVV  "
                                        placeholderTextColor = "#999"
                                        autoCapitalize = "none"
                                        secureTextEntry={true}
                                        onChangeText = {(pw)=>{this.setState({password:pw})}}/>

                            </View>
                        </View>    
                    
            </View>
            <TouchableOpacity style={{height:'6%',backgroundColor:'#E67A8E',marginVertical:'5%',marginTop:'8%',marginHorizontal:'25%',borderRadius:8,flexDirection:'row',alignContent:'center'}}
         onPress={() => this.props.navigation.navigate('PaymentReceipt')}>
         
                        
                    <Text  style={{marginRight:'5%',color:'#fff',marginHorizontal:'40%',fontWeight:'bold',fontSize:20,marginVertical:'5%'}}>Pay</Text>
            </TouchableOpacity>
                
               
            </Container>
            
        )
    }

}