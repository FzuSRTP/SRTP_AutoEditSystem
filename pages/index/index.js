//index.js
//获取应用实例
const app = getApp()
Page({
  
  data: {
    newList:[
      {id:1,title:"福州大学",img:"../../images/1.jpg"},
      { id: 2, title: "清华大学", img: "../../images/2.jpeg" },
      { id: 3, title: "北京大学", img: "../../images/3.jpg" },
      { id: 4, title: "厦门大学", img: "../../images/4.jpg" },
      { id: 5, title: "社会大学", img: "../../images/5.jpeg" },
    ],
    lastid:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loadData:function(lastid)
  {
    var limit=2
    var that=this
    wx.request({
      url:'http://localhost:8888/weicms/index.php?s=/addon/SnailHome/SnailHome/getList',
      data:{lastid:lastid,limit:limit},
      header:
      {
        'content-type':'application/json'
      },
      success:function(res)
      {
        console.log('*************'+res.data)
        var len = res.data.length
        that.setData({
          lastid:res.data[len-1].id
        })
        var dataArr = that.data.tableViewData
        var newData = dataArr.concat(res.data)
        that.setData({
          tableViewData:newData
        })
      }
    })
  }
})
