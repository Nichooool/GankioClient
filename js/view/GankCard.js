"use strict";

import React, { Component } from 'react'
import { View, Image, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import GankData from '../modle/GankData'
import GankDataFactory from '../utils/GankDataFactory'
import { date2String } from '../utils/DateUtils'
import DetailItem from '../view/DetailItem'

//屏幕参数
const { width, height } = Dimensions.get('window');
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
            detailData: this.gankData.details
        }
    }

    renderDetails() {
        let details = []
        for (let [key, value] of this.state.detailData.entries()) {
            if (value !== null && value.length > 0) {
                details.push(<DetailItem title={key} gankBaseData={value} />)
            }
        }
        return details
    }

    render() {
        return (
            <View style={Styles.root}>
                <View>
                    <Image style={Styles.headImg} source={{ uri: this.state.imgUrl }} />
                </View>
                <View>
                    <Text style={Styles.headDesc} > {this.state.desc}</Text>
                    <Text style={Styles.headDate} > {date2String(this.state.date)}</Text>
                </View>
                <ScrollView style={Styles.root}>
                    {this.renderDetails().map((item) => item)}
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
    //顶部图片
    headImg: {
        width: width,
        height: (2 / 3) * height
    },
    //顶部描述
    headDesc: {
        fontSize: 12,
        color: 'black'
    },
    //顶部日期
    headDate: {
        fontSize: 12,
        color: 'black'
    },
    //详情中的标题
    detailTitle: {
        fontSize: 12,
        color: 'black'
    },
    //详情中的描述
    detailDesc: {
        fontSize: 12,
        color: 'black'
    }
});