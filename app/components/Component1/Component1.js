import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class component1 extends Component {
    render() {
        return (
            <View>
                <Text>this is Component1.</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('component1', () => component1);