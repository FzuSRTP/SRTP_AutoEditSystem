var Bmob = require('../../utils/bmob.js')
Page({
  onLoad: function (options) {
    console.log("******");
    // var WxParse = require('../../wxParse/wxParse.js');
    getApp().editTabBar();
    var that = this
    wx.setNavigationBarTitle({
      title:'编   辑'
    })
  }
})


