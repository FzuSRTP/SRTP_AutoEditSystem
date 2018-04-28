//app.js
var Bmob = require('utils/bmob.js')
var util = require('utils/util.js');
Bmob.initialize("7abaedc2125e0dfe41682f7e083e5810", "9ee96cdea6e24a4a4f9b666cd12f3923");
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力 
    var logs = wx.getStorageSync('logs') || []
    var user = new Bmob.User() //开始注册用户
    user.auth()
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  editTabBar: function () {
    var tabBar = this.globalData.tabBar,
      currentPages = getCurrentPages(),
      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabBar.list) {
      tabBar.list[i].selected = false;
      (tabBar.list[i].pagePath == pagePath) && (tabBar.list[i].selected = true);

    }
    _this.setData({
      tabBar: tabBar
    });
  },


  globalData: {
    userInfo: null,
    tabBar: {
      position: "bottom",
      color: "#000",
      selectedColor: "#6495ED",
      backgroundColor: "#fff",
      borderColor: "black",
      list: [
        {
          pagePath: "/pages/detail/detail",
          text: "编辑",
          iconPath: "/images/edit.png",
          selectedIconPath: "/images/edit_sel.png",
          selected: true
        },
        // {
        //   pagePath: "/pages/log/log",
        //   text: "发送至公众号",
        //   iconPath: "/images/send.png",
        //   selectedIconPath: "/images/send_sel.png",
        //   selected: false
        // },
        {
          pagePath: "/pages/account/release/release",
          text: "我的投稿",
          iconPath: "/images/my.png",
          selectedIconPath: "/images/my_sel.png",
          selected: false
        }
      ]
    }
  }
})