import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch ,TextInput,} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPTextView from 'react-native-otp-textinput'
import styles from './styles';



import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';


export default class ValidateOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
            inputText: '',
            email:'',
            pw:'',
            pw1:''
          
        }
       
    }
    componentDidMount(){
        const email =  this.props.navigation.getParam('email', '');
        console.log(" sectionid data???",email);
        this.setState({email:email})
        // this.getStudent(id);

      
    }
    onOtpVerify=()=>{
        console.log(this.state.inputText);
        console.log(this.state.pw);
        console.log(this.state.pw1);
        fetch("https://online-edu.in/users/changepassword/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                   
                },
                body: JSON.stringify({
                    otp: this.state.inputText,
                    password:this.state.pw,
                    confirm_password:this.state.pw1
                    })
                })
                .then(response => response.json())
                .then((response) => {
                   
            console.log(response);
                    if(response.status==='200'){

                        Alert.alert("Your password has been changed")
                        this.props.navigation.navigate('Login')
    
                    }
                   
                    
                })
                .catch((error) => {
                    console.error(error);
                })
 }
    

    render() {
     
        return (
            <Container>
                <Header  style={{ borderBottomWidth: 0.4 ,backgroundColor:'#171560'}}>
                    <Left/>
                    <Body>
                        <Title style={{ color: '#fff',fontSize:25 }}>Reset Password</Title>
                    </Body>
                   
                </Header>
                <View style={{flexDirection:'column',margin:'5%'}}>
                <Text style={{marginVertical:'5%'}}>One Time Password</Text>
                <View>
                <OTPTextView
                    handleTextChange={(e) => { this.setState({inputText:e})}}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    defaultValue=""
                    inputCount={6}
                    />
                    </View>
                </View>
                <View style={{flexDirection:'column',margin:'5%'}}>

                    <Text style={{marginVertical:'5%'}}>Password</Text>
                    <TextInput 
                        style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                        underlineColorAndroid = "transparent"
                        placeholder = "  *******"
                        placeholderTextColor = "#999"
                        autoCapitalize = "none"
                        secureTextEntry={true}
                        onChangeText = {(pw)=>this.setState({pw:pw})}/>

                    <Text style={{marginVertical:'5%'}}> Confirm Password</Text>
                    <TextInput 
                        style={{borderRadius:20,borderWidth:0.5,borderColor:'red',paddingHorizontal:'5%'}}
                        underlineColorAndroid = "transparent"
                        placeholder = "  *******"
                        placeholderTextColor = "#999"
                        autoCapitalize = "none"
                        secureTextEntry={true}
                        onChangeText = {(pw1)=>this.setState({pw1:pw1})}/>
                </View>        
                
                <TouchableOpacity style={{height:'8%',backgroundColor:'#171560',marginVertical:'1%',marginHorizontal:'12%',borderRadius:35,flexDirection:'row',alignContent:'center',marginTop:'10%'}}
                        onPress={this.onOtpVerify
                            // () =>
                            //  this.props.navigation.navigate('ResetPassword')
                            }
                        >
                        <Text  style={{marginRight:'5%',color:'#fff',marginVertical:'4%',marginHorizontal:'30%',fontWeight:'bold',fontSize:24}}>
                            Countinue
                        </Text>
                    </TouchableOpacity>
               
               
            </Container>

        )
    }

}