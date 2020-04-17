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
  onLoad: function(options) {
    let data = wx.getStorageSync("alltasks")
    this.setData({
      ...data
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

  },
  //抢单click事件
  grabSheet: function(e) {
    Dialog.confirm({
        title: '',
        message: '确认抢单吗？'
      })
      .then(() => {
        let currentItem = e.currentTarget.dataset.item
        currentItem.status="进行中"
        currentItem.percentage = "30"
        let tasks = this.data.tasks.filter(item => item.id != currentItem.id)
        let tasking = this.data.tasking
        let mytasks = this.data.mytasks
        tasking.push(currentItem)
        mytasks.push(currentItem)
        this.setData({
          tasks,
          tasking,
          mytasks
        })
      wx.setStorage({
        key: 'alltasks',
        data: this.data,
      })
        console.log("this.data---",this.data)
      })
      .catch(() => {
        Dialog.close();
      });
  },
})