import React, {Component, useCallback} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  FlatList,
  Switch,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
  } from "react-native-table-component";
import {DrawerActions} from 'react-navigation-drawer';
import styles from './styles';
import MonthPicker from 'react-native-month-year-picker';
import DatePicker from 'react-native-datepicker';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import styles from "./styles";
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';

export default class Payslips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      isModalVisible: false,
      show: false,
      setShow: false,
      date: '',
      data: [
        {
          id: 1,
          ename: 'Event 1',
          sname: 'English',
          perpose: 'Event Details ',
          time: '8:30 AM',
          date: '8 Aug 2020',
        },
      ],
      tableHead: ["Subjects", "Marks Obtained", "Maximum Marks"],
    };
  }

  renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            marginHorizontal: '3%',
            borderRadius: 15,
            marginVertical: '1%',
            marginTop: '3%',
          }}
          onPress={() => this.props.navigation.navigate('OrdersDetails')}>
          <View style={{margin: '4%', marginTop: '25%'}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={this.state.tableHead}
                flexArr={[2, 2, 2]}
                heightArr={[48, 48]}
                style={styles.head}
                textStyle={styles.text}
              />
              <TableWrapper style={styles.wrapper}>
                {/* <Col data={this.state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/> */}
                <Rows
                  data={this.state.reportData}
                  flexArr={[2, 2, 2]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
            <Row
              data={this.state.tableHead1}
              flexArr={[2, 2, 2]}
              heightArr={[48, 48]}
              style={styles.head}
              textStyle={styles.text}
            />
          </View>
          {/* <Card style={{borderRadius:20}} >
                        
                        <CardItem style={styles.cardItem}>
                           
                            <Left style={{ flexDirection: 'column' }}>
                               
                                <Text style={styles.cardLeft}>June Month Payslip</Text>

                               
                            </Left>
                            <Right>
                            <Button style={{ width: '90%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '2%' }}
                                   >
                                    <Text style={{ marginLeft: '6%', fontWeight: 'bold', fontSize: 14, color: '#fff',textAlign:'center' }}>Download</Text>
                                </Button>
                            </Right>
                        </CardItem> */}
          {/* <CardItem style={{ backgroundColor: '#fff' }}>

                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '2%' }}
                                   onPress={() => this.props.navigation.navigate('EventsDetails')}>
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff', }}>Accept</Text>
                                </Button>
                                <Button style={{ width: '50%', backgroundColor: '#E67A8E', borderRadius: 45, marginRight: '2%' }}
                                   >
                                    <Text style={{ marginLeft: '22%', fontWeight: 'bold', fontSize: 14, color: '#fff',textAlign:'center' }}>Reject</Text>
                                </Button>
                        </CardItem>
                         */}

          {/* </Card> */}
        </TouchableOpacity>
      </>
    );
  };

  _handleMenu = () =>
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());

  render() {
    return (
      <Container>
        <Header style={{borderBottomWidth: 0.4, backgroundColor: '#E67A8E'}}>
          <Left style={{marginLeft: '2%'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomePage')}>
              <Icon
                name="arrow-back"
                size={25}
                style={{padding: 0, color: '#fff'}}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color: '#fff'}}>PaySlips</Title>
          </Body>
        </Header>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: '4%',
          }}>
          <Text style={{marginLeft: '5%', marginVertical: '8%'}}>
            Select Month
          </Text>
          <DatePicker
            style={{
              width: 220,
              height: 50,
              marginHorizontal: '4%',
              marginVertical: '8%',
              marginTop: '5%',
            }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              this.setState({date: date});
            }}
          />
        </TouchableOpacity>

        <FlatList
          style={{flex: 1, marginHorizontal: '2%', marginTop: '1%'}}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}></FlatList>
      </Container>
    );
  }
}
