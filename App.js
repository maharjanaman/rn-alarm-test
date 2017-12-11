import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import RNAlarm from 'react-native-alarm';
import moment from 'moment';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const myDate = moment() + 5000;

export default class App extends Component<{}> {
    setNewAlarm = () => {
        RNAlarm.setAlarm(
            `${myDate}`,
            'Test',
            'Testing Alarm',
            '',
            () => {
                console.warn('Alarm Success');
            },
            () => {
                console.warn('Alarm Error');
            });
    }

    clearCurrentAlarm = () => {
        // RNAlarm.clearAlarm();
        const checker = RNAlarm.getAlarmStatus(`${myDate}`);
        console.warn('Value', checker);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>

                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>

                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Button
                    title="SET ALARM"
                    onPress={this.setNewAlarm}
                />

                <Button
                    title="CLEAR ALARM"
                    onPress={this.clearCurrentAlarm}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
