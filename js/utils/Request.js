"use strict";

const DATA_URL = 'http://gank.io/api/data'
const DAY_URL = 'http://gank.io/api/day'

export function request (pos, response) {
    if (response === null) {
        return
    }
    if (pos < 1) {
        return
    }
    //结果数组
    let resultArray = []

    fetch(DATA_URL + "/福利/10/" + pos)
            .then(response => response.json())
            .then(res => {
                let promiseArray = []
                for (let i = 0; i < res.results.length; i++) {
                    let result = res.results[i]
                    let date = new Date(Date.parse(result.publishedAt))
                    resultArray.push({
                        id : result._id,
                        date : date,
                        imgUrl : result.url,
                        author : result.who,
                        details : undefined
                    })

                    if (date !== null && date instanceof Date) {
                        let year = date.getFullYear()
                        //此处需要加一 因为一月份是0
                        let month = date.getMonth() + 1
                        let day = date.getDate()
                        promiseArray.push(fetch(DAY_URL + '/' + year + '/' + month + '/' + day))
                    }
                }
                if (promiseArray.length == 0) {
                    throw new Error('没有数据!!')
                } else {
                    return Promise.all(promiseArray)
                }
            })
            .then(response => {
                let promiseArray = []
                for (let i = 0; i < response.length; i++) {
                    promiseArray.push(response[i].json())
                }
                return Promise.all(promiseArray)
            })
            .then(res => {
                for (let i = 0; i < resultArray.length; i++) {
                    resultArray[i].details = res[i]
                }
                response(resultArray)
            })
            .catch(function(error) {
                console.log(error)
            });
}