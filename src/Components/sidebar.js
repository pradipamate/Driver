import React from 'react';
import { Image, ScrollView, StyleSheet, Text, ImageBackground, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Provider as PaperProvider, Drawer, Dialog, TouchableRipple, RadioButton, Subheading, Button } from 'react-native-paper';
import VersionNumber from 'react-native-version-number';
import AsyncStorage from '@react-native-community/async-storage';    

class DrawerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            address:"",
            first_name:"",
            date_of_birth:"",
            lastName:"",
            designation:''
        }
    }

    async componentDidMount (){
        console.log("*******************************");
        const uid= await AsyncStorage.getItem('id')
        
        console.log(" inside sidebar--------",uid);
        this.getDriver(uid);
    }
     getDriver= async (uid)=>{
        const token= await AsyncStorage.getItem('token')
        console.log("Token......",token)
        let t =token.replace(/^"(.+(?="$))"$/, '$1');
     
        console.log(".........",uid)
       this.setState({
           loading:true
       })
        fetch("https://online-edu.in/users/api/staff/"+uid, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Token '+t
                },
                
                })
                .then(response => response.json())
                .then((response) => {
                    this.setState({
                        loading:false
                    })
                let sdata=response
                console.log('sdata prfile',response)
                this.setState({
                    address:response.address,
                    first_name:response.login_detail.first_name,
                    date_of_birth:response.date_of_birth,
                    lastName:response.login_detail.last_name,
                    designation:response.Designation
                })
                // let details=sdata.login_detail;
                // this.setState({sObj:details,sdata:sdata})
                })
                .catch((error) => {
                    console.error(error);
                })
    }

    deleteFcm=async()=>{  
       
  
        let fcmId=await AsyncStorage.getItem('RegNum')
        console.log("fcmId???",fcmId);
        
  
  
    fetch("https://online-edu.in/notifications/api/registeredusers/"+fcmId+"/", {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            
            },
           
            })
            // .then(response => response.json())
            .then((response) => {
             
                console.log(" deleettt   Register Fcm..ress",response)
                this.props.navigation.navigate('Login')
              
              
            })
            .catch((error) => {
              
                console.error(error);
            })
  
            
    }
  
    logout=()=>{
        this.props.navigation.navigate('Login')
    }
    render() {

        return (
            <>
            
                <View style={{flexDirection:'row',backgroundColor:'#171560',height:'15%'}}>
                <Image
                        square
                        style={{ height: 70, width: 70,borderRadius: 70/2,marginVertical:'10%',marginLeft:'6%'}}
                        source={{
                            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }}
                    />
                    <View style={{flexDirection:'column',marginVertical:'15%'}}>
                        <Text style={{color:'#fff',textAlign:'left',marginHorizontal:'16%',fontSize:16}}>{this.state.first_name+" "+this.state.lastName}</Text>
                        <Text style={{color:'#fff',textAlign:'left',marginHorizontal:'18%',fontSize:16}}>{this.state.designation}</Text>

                    </View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: '10%' }}>
                <Drawer.Item
                        label='Profile'
                        icon='account'
                        style={styles.touchables}
                        onPress={() => this.props.navigation.navigate('ProfilePage')}
                        theme={{ colors: { text: '#171560' } }}
                    />
                    <Drawer.Item
                        label='Past Rides'
                        icon='bus-clock'
                        style={styles.touchables}
                        onPress={() => this.props.navigation.navigate('PastRide')}
                        theme={{ colors: { text: '#171560' } }}
                    />

                    {/* <Drawer.Item
                        label='PaySlips'
                        icon='credit-card-settings-outline'
                        style={styles.touchables}
                        onPress={() => this.props.navigation.navigate('Payslips')}
                        theme={{ colors: { text: '#171560' } }}
                    /> */}
                   
                    <Drawer.Item
                        label='Leaves'
                        icon='clipboard-file-outline'
                        style={styles.touchables}
                        onPress={() => this.props.navigation.navigate('LeavesPage')}
                        theme={{ colors: { text: '#171560' } }}
                    />
                    
                    
                    
                    <Drawer.Item
                        label='Logout'
                        // label={i18next.t('drawer4')}
                        icon='login-variant'
                        style={styles.touchables}
                        onPress={this.deleteFcm}
                        theme={{ colors: { text: 'red' }}}//let buildNumber = DeviceInfo.getBuildNumber();

                    />
                    <View style={{ alignItems: 'center', marginRight: '45%' }}>
                        <Text style={{ color: '#171560',fontWeight:'600' }}>App version {VersionNumber.appVersion} ({VersionNumber.buildVersion})</Text>
                        {/* <Text style={{ color: '#fff' }}>App version {DeviceInfo.getBuildNumber()} </Text> */}

                    </View>


                </ScrollView>

                {/* chaneg language modal */}
                {/* <LanguageDialog visible={this.state.isVisible} close={this.toggleModal} /> */}
                {/* <View style={{ padding: 10 }}> */}

            </>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        paddingLeft: 8,
    },
    buttons: {
        marginRight: 20,
        marginBottom: 10
    },
    background: {
        width: undefined,
        padding: 15,
        paddingTop: 50,
    },
    profile_pic: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    name_text: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: hp('2.6%'),
        paddingTop: 10,
    },
    touchables: {
        paddingVertical: hp('0.3%'),
    },
});

export default DrawerComponent