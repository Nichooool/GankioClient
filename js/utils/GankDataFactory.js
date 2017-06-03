"use strict";

import GankData from '../modle/GankData'

export default class GankDataFactory {
    /**
     * url : 当天数据的图片
     * desc : 当前数据的概述
     * date : 日期
     * json :  当天数据的详情
     */
    static creator(url, desc, date, json) {
        let result = json.json()
        return new GankData(date, desc, url, result.results)
    }

}