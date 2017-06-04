"use strict";

import GankBaseData from './GankBaseData'

/**
 * 单页面显示所需要的数据
 * */
export default class GankData {
    constructor(date, desc, url, results) {
        //日期
        this.date = date
        //描述文案
        this.desc = desc
        //顶部图片链接
        this.url = url
        //map
        this.details = new Map()
        //将results转换成一个各种数据的数组
        if (results === null || results === undefined) {
           return
        }
        //android
        let android = this.result2BaseData(results.Android)
        //ios
        let ios = this.result2BaseData(results.iOS)
        //休息视频
        let leisureVideo = this.result2BaseData(results.休息视频)
        //福利
        let welfare = this.result2BaseData(results.福利)
        //拓展资源
        let expandResources = this.result2BaseData(results.拓展资源)
        //瞎推荐
        let recommend = this.result2BaseData(results.瞎推荐)
        //App
        let App = this.result2BaseData(results.App)

        this.details.set("Android", android)
        this.details.set("IOS", ios)
        this.details.set("休闲短视频", leisureVideo)
        this.details.set("福利", welfare)
        this.details.set("拓展资源", expandResources)
        this.details.set("瞎推荐", recommend)
        this.details.set("App", App)
    }

    /**
     * 将数据转换成数组
     * */
    result2BaseData(result) {
        let dataArray = []
        result.forEach(function(element) {
            let baseData = new GankBaseData(element)
            dataArray.push(baseData)
        });
        return dataArray
    }
} 