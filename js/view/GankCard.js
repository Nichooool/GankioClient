"use strict";

import React, { Component } from 'react'
import { View, Image, Text, ScrollView, Dimensions, StyleSheet} from 'react-native'
import GankData from '../modle/GankData'
import GankDataFactory from '../utils/GankDataFactory'
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
        this.setState = {
            date: gankData.date,
            imgUrl: gankData.url,
            desc: gankData.desc,
            detailData: gankData.details
        }
    }

    render() {
        return (
            <View style={Styles.root}>
                <View>
                    <Image style={Styles.headImg} />
                </View>
                <View>
                    <Text style={Styles.headDesc} />
                    <Text style={Styles.headDate} />
                </View>
                <ScrollView>
                    {
                        for (let [key, value] of this.state.detailData.entries()) {
                            if (value !== null && value.length > 0) {
                                (<DetailItem title = {key} gankBaseData = {value}/>)
                            }
                        }
                       
                    }
                </ScrollView>
            </View>
        )
    }
                    
                    
const Styles = StyleSheet.create({
    root: {
        width: width,
        height: height
                    
    //顶部图片
    headImg: {
        width: width,
        height: (2 / 3) * height
    },
                //顶部描述
    headDesc: {

    },
                //顶部日期
    headDate: {

    },
                //详情中的标题
    detailTitle: {

    },
                //详情中的描述
                    detailDesc: {

    }
})