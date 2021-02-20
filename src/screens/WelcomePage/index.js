import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, FlatList, Modal, Image,Text, Switch } from 'react-native';


export default class WelcomePage extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
   
  }
  render() {

    return (
      <View style={{marginHorizontal:'17%',flexDirection:'column'}}>
        <Image
           
            style={{ height: 300,width:320,marginLeft:'0%',marginVertical:'15%',marginTop:'24%',
            // alignSelf: "stretch",
            justifyContent: "center",
             alignItems: "center" }}
            source={require('../../Images/driver.png')}

             />    
             <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',marginTop:'20%'}}>Driver</Text>
             {/* <Text style={{fontSize:16,textAlign:'center',margin:'2%'}}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             </Text> */}

             <TouchableOpacity style={{ marginTop:'5%',backgroundColor:'#171560',alignSelf:'center',borderRadius:30}}
                        onPress={() => this.props.navigation.navigate('Login')}
                        >
                 <Text style={{marginHorizontal:'25%',fontSize:20,marginVertical:'4%',color:'#fff'}}>Get Started</Text>
             </TouchableOpacity>
             {/* <Text style={{fontSize:18,textAlign:'center',marginTop:'5%',color:'#999'}}>Skip</Text> */}


      </View>
    )
  }

}