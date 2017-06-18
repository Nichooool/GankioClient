"use strict";

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
        //数据
        this.results = results
    }
} 