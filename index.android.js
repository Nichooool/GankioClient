
import React, { Component } from 'react';
import Home from './js/view/Home'
import GankData from './js/modle/GankData'
import { request } from './js/utils/Request'

import {
  AppRegistry,
  View,
  Text
} from 'react-native'

export default class GankioClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gankDataArray: []
    }
  }

  componentDidMount() {
    let that = this
    request(1, function (response) {

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
      that.setState({
        gankDataArray: gankDataArray
      })
    })
  }

  render() {
    if (this.state.gankDataArray.length == 0) {
      return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>正在加载数据中... </Text></View>)
    } else {
      return (
        <Home gankDataArray={this.state.gankDataArray} />
      )
    }
  }
}

AppRegistry.registerComponent('GankioClient', () => GankioClient);
