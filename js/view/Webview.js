"use strict";

import React, { Component } from 'react';
import {
    WebView
} from 'react-native';


export default class Webview extends Component {
    constructor(props) {
        super(props)
        //this.props.url
        this.state = {
            url: 'http://www.baidu.com/'
        }
    }

    render() {
        return (
            <WebView style = {{flex: 1}} source = {{uri: this.state.url}}/>
        );
    }
}