// pages/home/home.js
//getApp()获取App()
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
const name = app.globalData.name

Page({
  handleGetUserInfo(event){
    console.log(event)
  },
  //---------------监听页面的生命周期函数-------------------------
  //页面被加载时
  onLoad(){
    console.log("onLoad")
    //发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8080/recommend',
      //箭头函数的this一层一层往上找
      // success:(res) => {
      //   console.log(res)
      //   const data = res.data.data.list;
      //   this.setData({
      //     list: data
      //   })
      // }
    })
  },
  //页面显示出来时调用的函数
  onShow(){
    console.log("onShow")
  },
  //页面初次渲染完成时
  onReady(){
    console.log("onReady")
  },
  //页面被隐藏时
  onHide(){
    console.log("onHide")
  },
  //打开一个页面并关闭时
  onUnload(){
    console.log("onUnload")
  },
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到顶部
  onReachBottom(){
    console.log("页面滚动到底部")
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
  
})