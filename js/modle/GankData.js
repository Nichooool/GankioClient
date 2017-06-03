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
        this.details = {}
        //将results转换成一个各种数据的数组
        if (results === null || results === undefined) {
           return
        }
        //android
        let android = result2BaseData(results.Android)
        //ios
        let ios = result2BaseData(results.iOS)
        //休息视频
        let leisureVideo = result2BaseData(results.休息视频)
        //福利
        let welfare = result2BaseData(results.福利)
        //拓展资源
        let expandResources = result2BaseData(results.拓展资源)
        //瞎推荐
        let recommend = result2BaseData(results.瞎推荐)
        //App
        let App = result2BaseData(results.App)

        details["Android"] = android
        details["IOS"] = ios
        details["休闲短视频"] = leisureVideo
        details["福利"] = welfare
        details["拓展资源"] = expandResources
        details["瞎推荐"] = recommend
        details["App"] = App
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