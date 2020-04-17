// pages/taskdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  nameChange:function(e){
    this.setData({
      name: e.detail
    })
  },
  addressChange: function (e) {
    this.setData({
      address: e.detail
    })
  },
  phoneChange: function (e) {
    this.setData({
      phone: e.detail
    })
  },
  payChange: function (e) {
    this.setData({
      pay: e.detail
    })
  },
  contentChange: function (e) {
    this.setData({
      content: e.detail
    })
  },
  savetask:function(){
    console.log("data", this.data)
    let data=wx.getStorageSync("alltasks")
    console.log("storage data",data)
  }
})