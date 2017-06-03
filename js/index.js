"use strict";

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import GankCard from './view/GankCard'

import {
    View,
    StyleSheet
} from 'react-native';

export default class helloworld extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            //默认空数组
            gankDataArray: []
        }
    }

    //布局加载完成 就异步加载数据
    componentDidMount() {

        this.setState({
            //默认空数组
            gankDataArray: []
        })
    }

    render() {
        return (
            <View style={Styles.root}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={false}>
                    {
                        gankDataArray.forEach(function (element) {
                            (<GankCard gankData={element} />)
                        })
                    }
                </Swiper>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    root: {

    },
    swiper: {

    }
});