"use strict";

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    WebView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';


export default class Webview extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerLeft: (
            <TouchableHighlight style = {Styles.back} activeOpacity={0.7} underlayColor={'#ff6347'} onPress={() => navigation.goBack()}>
                <Icon name="ios-arrow-back" size={30} color="white">
                </Icon>
            </TouchableHighlight>),
        headerStyle: { backgroundColor: '#ff6347' },
        headerTitleStyle: { color: '#f5f5f5' }
    });
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.navigation.state.params.url
        }
    }

    render() {
        return (
            <WebView style={{ flex: 1 }} source={{ uri: this.state.url }} />
        );
    }
}

const Styles = StyleSheet.create({
    back: {
        marginLeft: 8
    }
});