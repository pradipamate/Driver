import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import HomePage from '../screens/Home/index';
import ParentHome from '../screens/ParentHome/index';
import Attendance from '../screens/Attendance/index';
import PastRide from '../screens/PastRide/index'
import IssueBook from '../screens/IssueBook/index'
import Assignments from '../screens/Assignments/index';
import SearchTab from '../screens/SearchTab';
import NotificationTab from '../screens/NotificationTab';
import DrawerComponent from '../Components/sidebar';
 import Curriculum from '../screens/Curriculum/index'
 import Payslips from '../screens/Payslips/index'
import Performance from '../screens/Performance/index'
import BusStatus from '../screens/BusStaus/index'
import AssignmentDue from '../screens/AssignmentDue/index'
import Homework from '../screens/Homework/index'
import WelcomePage from '../screens/WelcomePage/index'
import Login from '../screens/Login/index'
import Login1 from '../screens/Login1/index'
import ResetPassword from '../screens/ResetPassword/index'
import ProfilePage from '../screens/Profilepage/index'
import ValidateOtp from '../screens/ValidateOtp/index'
import ContactUS from '../screens/ContactUS/index'
import RequestPage from '../screens/RequestPage/index'
import TimeTable from '../screens/TimeTable/index'
import LeavesPage from '../screens/LeavesPage/index'
import GoogleMap from '../screens/GoogleMap/index'
import EventsDetails from '../screens/EventsDetails/index'
import PaymentDetails from '../screens/PaymentDetails'
import PaymentReceipt from '../screens/PaymentReceipt/index'



console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: ({ navigation, navigationOptions }) => ({
                tabBarLabel: " ",
                tabBarIcon: ({ tintColor }) => {
                    return <Icon1 name="home" color={tintColor} size={35} style={{ marginTop: '25%' }} />;
                }
            }),
        },
        SearchTab: {
            screen: SearchTab,
            navigationOptions: ({ navigation, navigationOptions }) => ({
                tabBarLabel: ' ',
                tabBarIcon: ({ tintColor }) => (
                    <Icon1 name="shopping-bag" color={tintColor} size={28} style={{ marginTop: '25%' }} />
                )
            })
        },
        NotificationTab: {
            screen: NotificationTab,
            // navigationOptions: {
            navigationOptions: ({ navigation, navigationOptions }) => ({
                tabBarLabel: ' ',
                tabBarIcon: ({ tintColor }) => (
                    <Icon1 name="plus-circle" color={tintColor} size={70} style={{ marginTop: 0 }} />
                )
            })
        },
       
    },
    {
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: '#ffc90e',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: 12,
            },
            style: {
                height: 60,
                backgroundColor: '#fff',
                borderTopColor: "grey",
            }
        }
    },
);

const LoginStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        WelcomePage: {
            screen: WelcomePage,
            navigationOptions: { header: null }
        },
       
    },
    { initialRouteName: 'WelcomePage' }
);


const HomeStack = createStackNavigator(
    {

        HomePage: {
            screen: HomePage,
            navigationOptions: { header: null }
        },
        Curriculum: {
            screen: Curriculum,
            navigationOptions: { header: null }
        },//Events
        Payslips: {
            screen: Payslips,
            navigationOptions: { header: null }
        },//Performance
        Performance: {
            screen: Performance,
            navigationOptions: { header: null }
        },//Attendance
        Attendance: {
            screen: Attendance,
            navigationOptions: { header: null }
        },//TimeTable
        PastRide: {
            screen: PastRide,
            navigationOptions: { header: null }
        },//IssueBook
        IssueBook: {
            screen: IssueBook,
            navigationOptions: { header: null }
        },//Assignments
        Assignments: {
            screen: Assignments,
            navigationOptions: { header: null }
        },//BusStatus
        BusStatus: {
            screen: BusStatus,
            navigationOptions: { header: null }
        },//AssignmentDue
        AssignmentDue: {
            screen: AssignmentDue,
            navigationOptions: { header: null }
        },//Homework
        Homework: {
            screen: Homework,
            navigationOptions: { header: null }
        },//WelcomePage
        // WelcomePage: {
        //     screen: WelcomePage,
        //     navigationOptions: { header: null }
        // },
        // Login: {
        //     screen: Login,
        //     navigationOptions: { header: null }
        // },
        Login1: {
            screen: Login1,
            navigationOptions: { header: null }
        },//ResetPassword
        ResetPassword: {
            screen: ResetPassword,
            navigationOptions: { header: null }
        },//ProfilePage
        ProfilePage: {
            screen: ProfilePage,
            navigationOptions: { header: null }
        },//
        NotificationTab: {
            screen: NotificationTab,
            navigationOptions: { header: null }
        },//ValidateOtp
        ValidateOtp: {
            screen: ValidateOtp,
            navigationOptions: { header: null }
        },//ParentHome
        ParentHome: {
            screen: ParentHome,
            navigationOptions: { header: null }
        },//ContactUS
        ContactUS: {
            screen: ContactUS,
            navigationOptions: { header: null }
        },//RequestPage
        RequestPage: {
            screen: RequestPage,
            navigationOptions: { header: null }
        },//TimeTable
        TimeTable: {
            screen: TimeTable,
            navigationOptions: { header: null }
        },
        //FeeStructure
        LeavesPage: {
            screen: LeavesPage,
            navigationOptions: { header: null }
        },//GoogleMap
        GoogleMap: {
            screen: GoogleMap,
            navigationOptions: { header: null }
        },//EventsDetails
        EventsDetails: {
            screen: EventsDetails,
            navigationOptions: { header: null }
        },//PaymentDetails
        PaymentDetails: {
            screen: PaymentDetails,
            navigationOptions: { header: null }
        },//PaymentReceipt
        PaymentReceipt: {
            screen: PaymentReceipt,
            navigationOptions: { header: null }
        },

        // tabscreen: {
        //     screen: TabNavigator,
        //     navigationOptions: { header: null }
        // },

        
        // Registration: {
        //     screen: Registration,
        //     navigationOptions: { header: null }
        // },
    },
    {
        initialRouteName: 'HomePage',
    }
);
const DrawerStack = createDrawerNavigator(
    {
        MainDrawer: { screen: HomeStack },
        // MyOrders: { screen: MyOrdersStack },

    },
    {
        initialRouteName: 'MainDrawer',
        backBehavior: 'initialRoute',
        drawerBackgroundColor: '#fff',
        drawerWidth: Dimensions.get('window').width * 0.75,
        contentComponent: props => (
            <DrawerComponent {...props} />
        )
    },
);


class AuthLoadingScreen extends React.Component
{
  constructor ()
  {
    super();
    this.state={
      token: '',
      id:''
    }
    this._bootstrapAsync();
  }
  componentDidMount ()
  {
    setTimeout(() =>
    {
      SplashScreen.hide();
    }, 600);
  }
  _bootstrapAsync=async () =>
  {
    try
    {
      let token=await AsyncStorage.getItem('token');
      let id=await AsyncStorage.getItem('id');
      console.log("tokennnnnn",token);
      console.log("ideeeeeeeeeeeeeee",id);

      if (token!==null && id!==null)
      {
       
        this.setState({
          token: token,
          id:id
        })
      }
      this.props.navigation.navigate((this.state.token===null||_.isEmpty(this.state.token)) && (this.state.id===null||_.isEmpty(this.state.id))? 'LoginStack':'Home')
    } catch (error)
    {
      console.log('Something went wrong ....', error);
    }
  };
  render ()
  {
    return (
      <></>
    );
  }
}





// export default createAppContainer(
const Nav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Login: LoginStack,
        Home: HomeStack,
        Drawer: DrawerStack,

    },
    {
        initialRouteName: 'AuthLoading'
    }
)
// );
export default createAppContainer(Nav);

