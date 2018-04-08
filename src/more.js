
//'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class More extends Component {
    static navigationOptions = {
        tabBarLabel: 'More'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    More Sayfası kardeş
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
        backgroundColor: '#654321'
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
