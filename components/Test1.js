import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class Test1 extends Component {
    func() {
        console.info(222);
    }
    render() {
        return (
            <View>
                <Text onPress={this.func} style={styles.color}>测试1</Text>
                <Text style={styles.color}>---</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    color: {
        fontSize: 30,
        color: 'red'
    }
})
