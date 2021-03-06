"use strict";

import React, { Component } from 'react'
import { View, Image, Text, ScrollView, Dimensions, StyleSheet, Animated } from 'react-native'
import GankData from '../modle/GankData'
import GankDataFactory from '../utils/GankDataFactory'
import { date2String } from '../utils/DateUtils'
import DetailItem from '../view/DetailItem'

//屏幕参数
const { width, height } = Dimensions.get('window');
//统一对于左边的边距
const MARGIN_LEFT = 10
//图片的高度
const IMG_HEIGHT = (2 / 3) * height;

/**
 * 参数 gankData 指定内容数据
 * */
export default class GankCard extends Component {
    constructor(props) {
        super(props)
        this.gankData = this.props.gankData;
        this.state = {
            date: this.gankData.date,
            imgUrl: this.gankData.url,
            desc: this.gankData.desc,
            detailData: this.gankData.results,
            headOpacity: 1
        }
    }

    renderDetails() {
        let details = []
        let that = this
        for (let variable in this.state.detailData) {
            details.push(<DetailItem navigation = { that.props.navigation} style = {Styles.detailItem} title={variable} gankBaseData={this.state.detailData[variable]} />)
        }
        return details
    }

    _onScorll(event) {
        const { nativeEvent } = event;
        let y = nativeEvent.contentOffset.y
        if (y > IMG_HEIGHT) {
            y = IMG_HEIGHT;
        }
        //图片的高度
        let rate = (IMG_HEIGHT - y) / IMG_HEIGHT;
        // console.log(this.state.headOpacity)
        if (rate > 0.9) {
            rate = 1
        } else if (rate < 0.1) {
            rate = 0
        }
        this.setState({
            headOpacity: rate
        })
    }

    render() {
        return (
            <View style={Styles.root}>
                <Image style={[Styles.headImg, { opacity: this.state.headOpacity }]} source={{ uri: this.state.imgUrl }} ></Image>
                <View style={[Styles.headdetail, { opacity: this.state.headOpacity }]} >
                    <View style={{ flex: 1 }} />
                    <Text style={Styles.headDesc} > {this.state.desc}</Text>
                    <Text style={Styles.headDate} > {date2String(this.state.date)}</Text>
                </View>
                <ScrollView style={Styles.scrollView} onScroll={this._onScorll.bind(this)} showsVerticalScrollIndicator={false}>
                    <View style={Styles.scrollViewTop} />
                    <View style={Styles.scrollViewItem}>
                        {this.renderDetails().map((item) => item)}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    root: {
        width: width,
        height: height
    },
    headdetail: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: IMG_HEIGHT
    },
    scrollView: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        flex: 1
    },
    scrollViewTop : {
        width: width,
        height: IMG_HEIGHT
    },
    scrollViewItem: {
        flex: 1,
        backgroundColor: '#ff6347'
    },
    //顶部图片
    headImg: {
        width: width,
        height: IMG_HEIGHT,
        resizeMode: 'cover'
    },
    //顶部描述
    headDesc: {
        fontSize: 30,
        color: 'white',
        left: MARGIN_LEFT
    },
    //顶部日期
    headDate: {
        fontSize: 30,
        color: 'white',
        marginLeft: MARGIN_LEFT
    },
    //数据间隔
    detailItem: {
        marginTop: 30
    }
});