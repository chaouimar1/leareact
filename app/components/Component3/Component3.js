import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export default class Component3 extends Component {
    constructor(){
        super();
        this.state = {
            textValue:'Hello',
            switchValue: true
        }
    }

    onChangeText(value){
        this.setState({
            textValue:value
        })
    }

    onSubmit(){
        console.log('SUBMITTED.....')
    }

    onChangeValue(value) {
        this.setState({
            switchValue: value
        })
    }  
    
    render() {
        return (
            <View>
                <TextInput 
                    placeholder="enter text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text>
                <Switch 
                    value={this.state.switchValue}
                    onValueChange={(value) => this.onChangeValue(value)}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component3', () => Component3);