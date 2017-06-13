"use strict";

import React, {Component} from 'React';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class ActionBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return(
            <View style = {Styles.bar}>
                <Icon style = {Styles.back} name="ios-arrow-back" size={30} color="#900"></Icon>
                <Text style = {Styles.title}>{this.state.title}</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    bar: {
        width,
        height : 48,
        flexDirection: "row",
        alignItems: 'center'
    },
    title : {
        fontSize: 14,
        color : "black",
        marginLeft: 8
    },
    back: {
        marginLeft: 8
    }
});
