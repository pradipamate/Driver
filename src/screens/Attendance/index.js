import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch,TextInput } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            date:'',
            country: ''
        }
       
    }
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    
    render() {
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#977FED'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomePage')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Attendance</Title>
                    </Body>
                   
                </Header>
               
                {/* <Calendar
                    // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
                    markingType={'custom'}
                    markedDates={{
                        '2018-03-28': {
                            customStyles: {
                                container: {
                                    backgroundColor: '#DB7093'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2020-07-20': {
                            customStyles: {
                                container: {
                                    backgroundColor: '#DB7093',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        },
                        '2020-08-21': {
                            customStyles: {
                                container: {
                                    backgroundColor: '#DB7093',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        },
                        '2020-08-03': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'red',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}
                /> */}
                <View style={{height:'6%',marginTop:'5%',marginHorizontal:'5%',flexDirection:'row',borderWidth:1,borderRadius:12,borderColor:'#999'}}>
                    <Text style={{color:'#333',marginLeft:'3%',marginVertical:'3%'}}>Total Present Days</Text>
                    <View style={{backgroundColor:'green',marginLeft:'45%',height:30,width:30,borderRadius:15,alignSelf:'center'}}>
                         <Text style={{textAlign:'center',color:'#fff',marginTop:'10%'}}>25</Text>
                     </View>
                </View>

                <View style={{height:'6%',marginTop:'5%',marginHorizontal:'5%',flexDirection:'row',borderWidth:1,borderRadius:12,borderColor:'#999'}}>
                    <Text style={{color:'#333',marginLeft:'3%',marginVertical:'3%'}}>Total Absent Days</Text>
                    <View style={{backgroundColor:'red',marginLeft:'46%',height:30,width:30,borderRadius:15,alignSelf:'center'}}>
                        <Text style={{textAlign:'center',color:'#fff',marginTop:'10%'}}>3</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'red',marginLeft:'5%',marginVertical:'10%'}}>Reason For Future Leaves</Text>
                    <DatePicker
                            style={{width: 150,height:50,marginHorizontal:'4%',marginVertical:'5%',marginTop:'8%'}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                </View>
                <TextInput
                        style={{marginHorizontal:'5%',borderWidth:0.5,padding:'2%'}}
                        value={this.state.value}
                        onChangeText={text=>this.setState({value:text})}
                        multiline={true}
                        numberOfLines={4}
                />
            </Container>
        )
    }

}