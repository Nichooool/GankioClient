"use strict";
/**
 * 最基础数据  
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