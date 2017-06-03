"use strict";
/**
 * 福利最基础数据  
 * {
        "_id": "591685fd421aa91c92f77668", 
        "createdAt": "2017-05-13T12:05:17.418Z", 
        "desc": "\u4e0d\u8981\u518d\u65b0\u5efa View \u6765\u753b\u5206\u9694\u7b26\u4e86\uff0c\u7528 Drawable \u5427", 
        "images": [
          "http://img.gank.io/be9e2e9b-65ec-41ce-9b23-43b0c904997e"
        ], 
        "publishedAt": "2017-05-23T11:14:05.141Z", 
        "source": "web", 
        "type": "Android", 
        "url": "https://github.com/nekocode/DividerDrawable", 
        "used": true, 
        "who": "nekocode"
   }
 * */
export default class GankBaseData {
    constructor(data) {
        this.id = data._id
        this.createdAt = data.createdAt
        this.desc = data.desc
        //此处为一个数组 url数组
        this.imageUrls = data.images
        this.publishedAt = data.publishedAt
        //描述对应的地址
        this.url = data.url
        //作者
        this.who = data.who
    }
}