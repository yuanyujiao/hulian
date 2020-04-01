// pages/tasks/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync("alltasks")
    this.setData({
      ...data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("this.data---", this.data)
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
  //抢单click事件
  grabSheet: function () {
    Dialog.confirm({
      title: '',
      message: '确认抢单吗？'
    })
      .then(() => {
          console.log("e---",e)
      })
      .catch(() => {
        Dialog.close();
      });
  },
})