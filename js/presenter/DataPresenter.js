"use strict";

import {
    request,
    DATA_URL
} from '../utils/Request'

import {
    getLocalCache,
    saveLocalCache
} from '../utils/Stroage.js'

import GankData from '../modle/GankData'

export default class DataPresenter {
    constructor() {
        this.gankDataArray = []
        this.pos = 1
        this.loadData = false
    }

    /**
     * 请求数据
     **/
    requestGankData(callback) {
        let that = this
        if (this.loadData) {
            callback('已经正在努力的获取数据了，请耐心等待一会!!', null)
            return
        }
        this.loadData = true
        //第一次获取数据 也就是刚打开页面
        if (this.pos === 1) {
             console.log('先请求本地数据')
            //先从本地查询是否存在数据
            getLocalCache(DATA_URL + this.pos, function (result) {
                if (result !== null) {
                    //回调数据
                    that.gankDataArray = result
                    callback('正在为您请求最新的数据!!', that.gankDataArray )
                }
                //请求网络数据
                request(that.pos, function (response) {
                    let gankDataArray = []
                    for (let i = 0; i < response.length; i++) {
                        let id = response[i].id
                        let date = response[i].date
                        let imgUrl = response[i].imgUrl
                        let author = response[i].author
                        let results = response[i].details.results
                        let gankData = new GankData(date, author, imgUrl, results)
                        gankDataArray.push(gankData)
                    }
                    that.gankDataArray = gankDataArray
                    that.loadData = false
                    //再次回调数据
                    callback('数据加载完成!!', that.gankDataArray)
                    //保存缓存
                    saveLocalCache(DATA_URL + that.pos, that.gankDataArray, (error) => {

                    })
                }, function (error) {
                    callback('没有获取到数据呢，请检查下网络情况!!', null)
                    that.loadData = false
                })
                that.pos ++
            })
        } else {
             console.log('网络数据')
            //请求网络数据
            request(this.pos, function (response) {
                let gankDataArray = []
                for (let i = 0; i < response.length; i++) {
                    let id = response[i].id
                    let date = response[i].date
                    let imgUrl = response[i].imgUrl
                    let author = response[i].author
                    let results = response[i].details.results
                    let gankData = new GankData(date, author, imgUrl, results)
                    gankDataArray.push(gankData)
                }
                // console.log('2 >> ' + gankDataArray)
                that.loadData = false
                Array.prototype.push.apply(that.gankDataArray, gankDataArray);
                //回调数据
                callback('数据加载完成!!', that.gankDataArray)
                that.pos ++
            }, function(error) {
                that.loadData = false
            })
        }
    }
}

/**
 * 此处也可以使用promise链式来写
 * */
function getGankDataArray(pos, response, error) {
    if (pos === 1) {
        //先从本地查询是否存在数据
        getLocalCache(DATA_URL + pos, function (result) {
            if (result !== null) {
                //回调数据
                callback(result)
            }
            //请求网络数据
            request(pos, function (response) {
                let gankDataArray = []
                for (let i = 0; i < response.length; i++) {
                    let id = response[i].id
                    let date = response[i].date
                    let imgUrl = response[i].imgUrl
                    let author = response[i].author
                    let results = response[i].details.results
                    let gankData = new GankData(date, author, imgUrl, results)
                    gankDataArray.push(gankData)
                }
                console.log(gankDataArray)
                //再次回调数据
                callback(gankDataArray)
                //保存缓存
                saveLocalCache(DATA_URL + pos, gankDataArray)
            })
        }, function (error) {

        })
    } else {
        //请求网络数据
        request(pos, function (response) {
            let gankDataArray = []
            for (let i = 0; i < response.length; i++) {
                let id = response[i].id
                let date = response[i].date
                let imgUrl = response[i].imgUrl
                let author = response[i].author
                let results = response[i].details.results
                let gankData = new GankData(date, author, imgUrl, results)
                gankDataArray.push(gankData)
            }
            console.log('2 >> ' + gankDataArray)
            //回调数据
            callback(result)
        })
    }

}
