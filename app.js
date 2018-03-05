//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力 
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  editTabBar:function (){
    var tabBar = this.globalData.tabBar,
        currentPages = getCurrentPages(),
        _this = currentPages[currentPages.length - 1],
        pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for(var i in tabBar.list)
    {
      tabBar.list[i].selected = false;
      (tabBar.list[i].pagePath == pagePath) && (tabBar.list[i].selected = true);
      
    }
    _this.setData({
      tabBar : tabBar
    });
  },
  globalData: {
    userInfo: null,
    tabBar:{
      position:"bottom",
      color:"#000",
      selectedColor:"#6495ED",
      backgroundColor:"#fff",
      borderColor:"black",
      list:[
        {
          pagePath:"/pages/detail/detail",
          text:"编辑",
          iconPath:"/images/edit.png",
          selectedIconPath:"/images/edit_sel.png",
          selected:true 
        },
        // {
        //   pagePath: "/pages/log/log",
        //   text: "发送至公众号",
        //   iconPath: "/images/send.png",
        //   selectedIconPath: "/images/send_sel.png",
        //   selected: false
        // },
        {
          pagePath: "/pages/index/index",
          text: "我的投稿",
          iconPath: "/images/my.png",
          selectedIconPath: "/images/my_sel.png",
          selected: false 
        }
      ]
    }
  }
})