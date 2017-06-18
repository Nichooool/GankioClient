'use strict';

import React, { Component } from 'react';
import Home from '../view/Home'
import Webview from '../view/Webview'
import {
    AppRegistry,
    View,
    Text
} from 'react-native'

import { StackNavigator } from 'react-navigation';

export default class GankioClient extends Component {
    static navigationOptions = {
        //标题栏直接不显示了
        header : null
    }
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Home navigation = { this.props.navigation} />
        )
    }
}

const GankioClientApp = StackNavigator({
    Home: { screen: GankioClient },
    WebView: { screen : Webview}
}, {
    
});

AppRegistry.registerComponent('GankioClient', () => GankioClientApp);