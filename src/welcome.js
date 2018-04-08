//'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


export default class Welcome extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./Images/home.png')} style={{ width:22, height:22, tintColor:'white' }}></Image>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Welcome Sayfası kardeş
        </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456'
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
