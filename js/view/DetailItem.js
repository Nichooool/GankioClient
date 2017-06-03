"use strict";

import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'
import GankData from '../modle/GankData'

/**
 * 参数 gankData 指定内容数据
 * */
export default class DetailItem extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            width: this.props.width,
            title: this.props.title,
            dataArray: this.props.gankBaseData
        }
    }

    render() {
        return (
            <View style={Styles.root}>
                <Text> {this.state.title} </Text>
                {
                    this.state.dataArray.forEach(function (element) {
                        (<View style = {Styles.content} >
                            <Text style = {Styles.contentDesc}>{element.desc}</Text>
                            <Text style = {Styles.contentAuthor}>{'(' + element.who + ')'}</Text>
                        </View>)
                    })
                }
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    //根布局
    root: {
       
    },
    //标题
    title: {

    },
    //正文
    content: {

    },
    //描述
    contentDesc: {

    },
    //作者
    contentAuthor: {

    }
})