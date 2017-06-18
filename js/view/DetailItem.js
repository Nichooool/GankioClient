"use strict";

import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableHighlight, Image } from 'react-native'
import GankData from '../modle/GankData'

/**
 * 参数 gankData 指定内容数据
 * */
export default class DetailItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            dataArray: this.props.gankBaseData
        }
    }

    _onPressButton() {
        //此处的this值不是指向DetailItem
        console.log(this.url)
        console.log(this.navigation)
        const { navigate } = this.navigation;
        navigate('WebView', { url: this.url, title : this.desc})
    }

    renderImage(images) {
        if (images !== undefined && images !== null && images.length > 0) {
            return (
                <Image
                    style={Styles.itemImg}
                    source={{ uri: images[0] }} >
                </Image>)
        }
    }

    renderItems() {
        let items = []
        let that = this
        for (let pos = 0; pos < this.state.dataArray.length; pos++) {
            let element = this.state.dataArray[pos]
            items.push
                (<TouchableHighlight navigation = { that.props.navigation} desc = {element.desc} activeOpacity={0.7} underlayColor={'#ff6347'} url={element.url} onPress={that._onPressButton}>
                    <View>
                        <View style={Styles.content} >
                            <Text style={Styles.contentDesc}>{' - ' + element.desc}</Text>
                            <Text style={Styles.contentAuthor}>{'(' + element.who + ')'}</Text>
                        </View>
                        {that.renderImage(element.images)}
                    </View>
                </TouchableHighlight>)
        }
        return items
    }
    render() {
        console.log('renderItems >> render')
        return (
            <View style={Styles.root}>
                <Text style={Styles.title}> {this.state.title} </Text>
                {this.renderItems().map((items) => items)}

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
        fontSize: 20,
        marginLeft: 6,
        color: '#2f4f4f'
    },
    //正文
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: 'white',
        marginLeft: 24,
        marginTop: 12
    },
    contentLink: {
        fontSize: 12,
        color: 'white',
        marginRight: 2
    },
    itemImg: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
        marginLeft: 40
    },
    //描述
    contentDesc: {
        fontSize: 14,
        color: '#f5f5f5'
    },
    //作者
    contentAuthor: {
        marginLeft: 2,
        fontSize: 10,
        color: '#666666'
    }
})