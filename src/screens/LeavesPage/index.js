import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, TextInput } from 'react-native';
import { Container, Header, Title, Content,Accordion , Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';
import styles from './styles';
import DatePicker from 'react-native-datepicker'
import Loader from '../../Components/Loader';



export default class LeavesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            currentPosition: 0,
            isModalVisible: false,
            tdate:"",
            fdate:"",
            loading:false
        }
    }
    
    onSubmit = () =>{
        this.setState({
            loading:true
        })
        console.log("state.....",this.state)
        // https://online-edu.in/attendance/staffleaves/
        fetch("https://online-edu.in/attendance/staffleaves/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date_from:this.state.fdate,
                date_to:this.state.fdate,
                comment:this.state.value
                })
            })
            .then(response => response.json())
            .then(async (response) => {
                this.setState({
                    loading:false
                })
                    console.log("response...",response);
                    Alert.alert("Your Request Submited Sucessfully...");
                    this.props.navigation.navigate('HomePage')
            })
            .catch((error) => {
                console.error(error);
            })

    }
    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    renderItem = ({ item }) => {
        return (
            <>
           
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                
                    <View >
                        
                        <CardItem style={styles.cardItem}>
                            <Left>
                            <Text style={styles.cardLeft}> {item.sname}</Text>
                            </Left>
                            <Body></Body>
                            <Right style={{ flexDirection: 'column' }}>
                                <Text style={styles.cardLeft1}>{item.per}</Text>
                               
                            </Right>
                        </CardItem>
                       

                        
                    </View>
                </TouchableOpacity>
            </>
        );

    };
    render() {
        return (
            <Container>
          <Loader loading={ this.state.loading }/> 

                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#E67A8E'}}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomePage')}>
                            <Icon name='arrow-back'  size={25} style={{ padding: 0 ,color:'#fff'}} />

                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff' }}>Leaves</Title>
                    </Body>
                   
                </Header>
               
                {/* <Content padder>
                        <Accordion dataArray={dataArray} icon="add"
                        expandedIcon="remove"
                          style={{ backgroundColor: "white",marginVertical:'15%',marginHorizontal:'3%' }}
                        headerStyle={{ backgroundColor: "#977FED" }}
                        contentStyle={{ backgroundColor: "#ddecf8" }}
                        iconStyle={{ color: "green" }}
                        textStyle={{ color: "#fff" }}

                        expandedIconStyle={{ color: "red" }}
                        animation={true}
                             expanded={true}/>
                        </Content>
                 */}
                 <Content>
                 <View  style={{height:'25%',flexDirection:'row',marginHorizontal:'4%',marginVertical:'5%'}}>
                {/* <Text style={{color:'#fff',marginLeft:'5%',marginVertical:'6%'}}>Select Date</Text> */}
                <View style={{flexDirection:"row"}}>
                    <DatePicker
                            style={{width: 140,height:50,marginHorizontal:'4%',marginVertical:'8%',marginTop:'5%'}}
                            date={this.state.fdate}
                            mode="date"
                            placeholder="From"
                            format="YYYY-MM-DD"
                            minDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({fdate: date})}}
                        />
                        <DatePicker
                            style={{width: 140,height:50,marginHorizontal:'4%',marginVertical:'8%',marginTop:'5%'}}
                            date={this.state.tdate}
                            mode="date"
                            placeholder="To"
                            minDate={this.state.fdate}
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({tdate: date})}}
                        />
                        </View>
                        </View>
                <Text  style={{color:'#333',marginVertical:'3%',marginHorizontal:'5%',fontSize:18}}>Reason for Leaves</Text>
                    <TextInput
                            style={{marginHorizontal:'5%',borderWidth:0.5,marginVertical:'5%',padding:'2%'}}
                            value={this.state.value}
                            onChangeText={text=>this.setState({value:text})}
                            multiline={true}
                            numberOfLines={3}
                    />
                     </Content>
                        <TouchableOpacity style={{flexDirection:"row",height:40,backgroundColor:'#E67A8E',marginVertical:'4%',marginTop:'8%',marginHorizontal:'20%',borderRadius:8,flexDirection:'row',alignContent:'center',marginBottom:"5%"}}
                         onPress={this.onSubmit}
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'3%',marginHorizontal:'30%',fontWeight:'bold',fontSize:20,marginBottom:10}}>Submit</Text>
                    </TouchableOpacity>
            </Container>
            
        )
    }

}