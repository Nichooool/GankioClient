"use strict";

import React, { Component } from 'react';
import GankCard from './GankCard'
import Swiper from 'react-native-swiper';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
//屏幕参数
const { width, height } = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //默认空数组
            gankDataArray: this.props.gankDataArray
        }
    }

    //布局加载完成 就异步加载数据
    componentDidMount() {
        // this.setState({
        //     //默认空数组
        //     gankDataArray: []
        // })
    }

    renderSegment() {
        let segments = []
        this.state.gankDataArray.forEach(function (element) {
            segments.push(<GankCard gankData={element} />)
        })
        return segments
    }

    render() {
        return (
            <View style={Styles.root}>
                <Swiper style={Styles.swiper} horizontal={true} autoplay={false}>
                    {this.renderSegment().map((segment) => segment)}
                </Swiper>
            </View>
        );
    }
}



const Styles = StyleSheet.create({
    root: {
        width: width,
        height: height
    },
    swiper: {
        flex: 1
    }
});