"use strict";

import React, { Component } from 'react';
import GankCard from './GankCard'
import Swiper from 'react-native-swiper';
import Webview from '../view/Webview'
import ActionBar from '../view/ActionBar'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar
} from 'react-native';
//屏幕参数
const { width, height } = Dimensions.get('window');

const DATA_URL = 'http://gank.io/api/data'
const DAY_URL = 'http://gank.io/api/day'

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
        
        fetch(DATA_URL + "/福利/10/1")
        .then(response => response.json())
        .then(res => { 
            let result = res.results[0]
            console.log(result.publishedAt)
            let date = new Date(Date.parse(result.publishedAt))
            if (date !== null && date instanceof Date) {
                let year = date.getFullYear()
                //此处需要加一 因为一月份是0
                let month = date.getMonth() + 1
                let day = date.getDate()
                console.log(DAY_URL + '/' + year + '/' + month + '/' + day)
                return fetch(DAY_URL + '/' + year + '/' + month + '/' + day)
            }
            throw new Error('没有日期数据!!')
        })
        .then(response => response.json())
        .then(res => { 
            console.log(res)
        })
        .catch(error =>
            console.log(error)
        );
    }

    renderSegment() {
        let segments = []
        this.state.gankDataArray.forEach(function (element) {
            segments.push(<GankCard gankData={element} />)
        })
        return segments
    }
    //滑动到最后
    _onMomentumScrollEnd(e, state, context) {
        if (state.index === 0) {
            console.log("最左边!")
        } else if (state.index === 3) {
            console.log("最右边!")
            //加载
        }
    }

    render() {
        return (
            <View style={Styles.root}>
                <StatusBar
                    translucent={false}
                    backgroundColor="#f5f5f5"
                />
                
                <Swiper style={Styles.swiper} loop={false} horizontal={true} autoplay={false} showsPagination={false} onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}>
                    {this.renderSegment().map((segment) => segment)}
                </Swiper>
            </View>
        );
    }
}
// <ActionBar style={Styles.actionBar} title={'返回'} />

const Styles = StyleSheet.create({
    root: {
        width: width,
        height: height
    },
    actionBar: {
        position: 'absolute',
         left: 0,
        top: 0,
        height: 48,
        width: width
    },
    swiper: {
        position: 'absolute',
        left: 0,
        top: 0
    }
});