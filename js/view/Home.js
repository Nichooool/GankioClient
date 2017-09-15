"use strict";

import React, { Component } from 'react'
import GankCard from './GankCard'
import Swiper from 'react-native-swiper'
import Webview from '../view/Webview'
import ActionBar from '../view/ActionBar'
import DataPresenter from '../presenter/DataPresenter'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar
} from 'react-native';
//屏幕参数
const { width, height } = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.dataPresenter = new DataPresenter()
        this.state = {
            gankDataArray: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.dataPresenter.requestGankData((tip, result) => {
            console.log("result >> " + tip);
            console.log(result);
            this.setState({
                gankDataArray: result
            })
        });
    }

    renderSegment() {
        let segments = []
        let that = this
        this.state.gankDataArray.forEach(function (element) {
            segments.push(<GankCard navigation={that.props.navigation} gankData={element} />)
        })
        return segments
    }
    //滑动到最后
    _onMomentumScrollEnd(e, state, context) {
        //到达 
        if (state.index == this.state.gankDataArray.length - 1) {
            console.log('到达最右面')
            this.dataPresenter.requestGankData((tip, result) => {
                console.log(tip)
                this.setState({
                    gankDataArray: result
                })
            });
        }
    }

    renderState() {
        if (this.state.gankDataArray.length == 0) {
            return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>正在加载数据中... </Text></View>)
        } else {
            return (
                <Swiper style={Styles.swiper} loop={false} horizontal={true} autoplay={false} showsPagination={false} onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}>
                    {this.renderSegment().map((segment) => segment)}
                </Swiper>
            )
        }
    }
    render() {
        console.log('render')
        return (
            <View style={Styles.root}>
                <StatusBar
                    translucent={false}
                    backgroundColor="#ff6347"
                />
                {this.renderState()}
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