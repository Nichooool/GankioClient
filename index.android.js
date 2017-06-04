
import React, { Component } from 'react';
import Home from './js/view/Home'
import GankData from './js/modle/GankData'
import GankBaseData from './js/modle/GankBaseData'

import {
  AppRegistry,
  View
} from 'react-native'

export default class GankioClient extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let results = this.buildTestData()
    let datas = []
    let data = new GankData(new Date(), '描述!!!!', 'https://ws1.sinaimg.cn/large/d23c7564ly1fg7ow5jtl9j20pb0pb4gw.jpg', results)
    datas.push(new GankData(new Date(), '描述!!!!', 'https://ws1.sinaimg.cn/large/d23c7564ly1fg7ow5jtl9j20pb0pb4gw.jpg', results))
    datas.push(new GankData(new Date(), '描述!!!!', 'https://ws1.sinaimg.cn/large/d23c7564ly1fg7ow5jtl9j20pb0pb4gw.jpg', results))
    datas.push(new GankData(new Date(), '描述!!!!', 'https://ws1.sinaimg.cn/large/d23c7564ly1fg7ow5jtl9j20pb0pb4gw.jpg', results))
    datas.push(new GankData(new Date(), '描述!!!!', 'https://ws1.sinaimg.cn/large/d23c7564ly1fg7ow5jtl9j20pb0pb4gw.jpg', results))
    return (
     <Home gankDataArray = {datas}/>
    )
  }

  buildTestData() {
    let baseDataArray = []
    let json = '{ ' +
      '"_id": "591685fd421aa91c92f77668",' +
      '"createdAt": "2017-05-13T12:05:17.418Z",' +
      '"desc": "\u4e0d\u8981\u518d\u65b0\u5efa View \u6765\u753b\u5206\u9694\u7b26\u4e86\uff0c\u7528 Drawable \u5427",  ' +
      '"images": [' +
      '  "http://img.gank.io/be9e2e9b-65ec-41ce-9b23-43b0c904997e"' +
      '], ' +
      '"publishedAt": "2017-05-23T11:14:05.141Z", ' +
      '"source": "web", ' +
      '"type": "Android",' +
      '"url": "https://github.com/nekocode/DividerDrawable", ' +
      '"used": true, ' +
      '"who": "nekocode" ' +
      '}';
    let baseData = JSON.parse(json)
    baseDataArray.push(new GankBaseData(baseData))
    baseDataArray.push(new GankBaseData(baseData))
    baseDataArray.push(new GankBaseData(baseData))
    let results = {
      Android: baseDataArray,
      iOS: baseDataArray,
      休息视频: baseDataArray,
      福利: baseDataArray,
      拓展资源: baseDataArray,
      瞎推荐: baseDataArray,
      App: baseDataArray
    }
    return results
  }
}

AppRegistry.registerComponent('GankioClient', () => GankioClient);
