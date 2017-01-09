//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello Worldqqqqqqqqqq',
     motto1: '跳转到下一页',
    userInfo: {
      nickName:'吕鹏'
    }
  },
  //事件处理函数
  usermotto: function() {
    wx.navigateTo({
      url: '../view/xxview'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        
        //userInfo:userInfo
       
      })
    })
  }
})
