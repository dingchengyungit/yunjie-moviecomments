// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async(event, context) => {
  console.info(event.start)
  console.info(event.count)
  // http://api.douban.com/v2/movie/subject/${event.movieid}?apikey=0df993c66c0c636e29ecbb5344252a4a

  return rp(`http://api.douban.com/v2/movie/in_theaters?start=${event.start}&count=${event.count}&apikey=0df993c66c0c636e29ecbb5344252a4a`)
    .then(function(res) {
      // Process html...
      return res
    })
    .catch(function(err) {
      // Crawling failed...
      return err
    });
}