import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class component1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name: 'meru',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Yo rozuya!'
    }

    render() {
        console.log('RELOADED !');
        let name = this.state.showName ? this.state.name : 'No name';
        return (
            <View>
                <Text>{this.props.message}</Text>
                <Text>{name}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('component1', () => component1);