/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Test1 from './components/Test1'


export default class rnTest extends Component {
    render() {
        return (
                <View style={styles.container}>
                    
                    <Test1></Test1>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('rnTest', () => rnTest);
