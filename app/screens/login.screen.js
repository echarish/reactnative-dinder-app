import React, { Component } from 'react';
import {
    Container,
    Content
} from 'native-base';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { inject } from 'mobx-react';

import Login from '../components/login.component';

@inject("stores")
export default class LoginScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {stores} = this.props
        return (
            <Container>
                <View>
                    <Content scrollEnabled={false}>
                        <Image source={stores.config.loginBG}>
                            <View>
                                <Login {...this.props}/>
                            </View>
                        </Image>
                    </Content>
                </View>
            </Container>
        )
    }
}