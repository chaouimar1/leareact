import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { red, green } from 'ansi-colors';

export default class Component2 extends Component {
    onPress() {
        console.log('PRESSED !');
    }

    onPress2() {
        console.log('PRESSED222 !');
    }
    
    render() {
        return (
            <View>
                <View style={styles.myview}>
                    <Text style={styles.mytext}>Hello meru</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight 
                        style={styles.v1} 
                        onPress={this.onPress}
                        underlayColor="blue"
                        >
                        <View>
                            <Text>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity 
                        style={styles.v2}
                        onPress={this.onPress2}
                        >
                        <View>
                            <Text>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text style={styles.vtext}>View 3</Text>
                    </View>
                    <View style={styles.v4}>
                        <Text style={styles.vtext}>View 4</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myview:{
        backgroundColor:'blue'
    },
    mytext:{
        color:'white'
    },
    container:{
        flexDirection:'row',
        height:100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    vtext:{
        color:'white'
    },
    v4: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    },
});

AppRegistry.registerComponent('Component2', () => Component2);