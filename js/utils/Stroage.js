"use strict";

import {
    AsyncStorage
} from 'react-native'

/**
 * 获取本地缓存
 * */
export function getLocalCache(key, callBack) {
    AsyncStorage.getItem(key).then((cache, error) => {
        if (error) {
            //返回为空数据
            callBack(null);
            return
        }
        //返回数据
        callBack(JSON.parse(cache, dateReviver))
    })
}

/**
 * 将日期字符串转化成Date
 * */
function dateReviver(key, value) {  
    var a;  
    if (typeof value === 'string') {  
        a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);  
        if (a) {  
            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],  
                            +a[5], +a[6]));  
        }  
    }  
    return value;  
}

/**
 * 保存缓存到本地
 * */
export function saveLocalCache(key, obj, callBack = never) {
    let result = JSON.stringify(obj)
    AsyncStorage.setItem(key, result, function (error) {
        callBack(!error);
    })
}