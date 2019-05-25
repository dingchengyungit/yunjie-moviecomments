// pages/comment/comment.js
const db = wx.cloud.database(); // 初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content: '', // 评价内容
    score: 5, // 评价的分数
    images: [],
    fileIDs:[],
    movieid:-1

  },

  onContentChange: function(event) {
    this.setData({
      content: event.detail
    })
  },

  onScoreChange: function(event) {
    this.setData({
      score: event.detail
    })
  },

  submit: function() {
    wx.showLoading({
      title: '正在提交，请稍后哦！',
    })

    console.log(this.data.content)
    // 上传图片到云存储
    let promiseArr = []

    for (let i = 0; i < this.data.images.length; i++) {
      promiseArr.push(new Promise((resolve, reject) => {
        let item = this.data.images[i]
        let suffix = /\.\w+$/.exec(item)[0]

        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
          filePath: item, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            this.setData({
              fileIDs:this.data.fileIDs.concat(res.fileID)
            })
            console.log("云存储成功了，并且返回fileid了")
            resolve() // 异步执行的关键语句。
          },
          fail: console.error
        })
      }))
    }

    console.log("下面要进入Promise.all了....")
    Promise.all(promiseArr).then(res=>{
      console.log("开始上传到数据库了................")
      db.collection('comment').add({
        data:{
          content:this.data.content,
          score:this.data.score,
          movieid:this.data.movieid,
          fileIDs:this.data.fileIDs
        }
      }).then(res=>{
        console.log(res)
        wx.hideLoading()
        wx.showToast({
          title: '评价成功',
        })
      }).catch(err=>{
        
        console.error(err)
        wx.hideLoading()
        wx.showToast({
          title: '评价失败',
        })
      })
    })
  },

  uploadImg: function() {
    // 选择图片
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => { // 默认的括号式方式会报错，改成箭头式
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        this.setData({
          images: this.data.images.concat(tempFilePaths)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      movieid:options.movieid
    })
    console.log(options)
    wx.cloud.callFunction({
      name: 'getmoviedetail',
      data: {
        movieid: options.movieid
      }
    }).then(res => {
      console.log(res)
      this.setData({
        detail: JSON.parse(res.result)
      })
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})