import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, Alert, FlatList, Switch } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { Container, Header, Title, Content, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Left, Right, Body, Text } from 'native-base';
import styles from './styles';

export default class SearchTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            isModalVisible: false,
           
        }
    }
    

    _handleMenu = () => this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    
    render() {
        return (
            <Container>
                <Header transparent style={{ borderBottomWidth: 0.4, borderBottomColor: '#999' }}>
                    <Left style={{ marginLeft: '2%' }}>
                        <TouchableOpacity
                            onPress={this._handleMenu}>
                            <Icon name='menu' color='#333' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: '#333' }}>Order Management</Title>
                    </Body>
                   
                </Header>
                <Content>
                    <Text>Search</Text>
                </Content>
                
            </Container>
        )
    }

}