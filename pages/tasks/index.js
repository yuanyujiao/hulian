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
    const that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url: "/pages/index/index"
          })
        } else {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
          Dialog.confirm({
            title: '',
            message: '确认抢单吗？'
          })
            .then(() => {
              let currentItem = e.currentTarget.dataset.item
              currentItem.status = "进行中"
              currentItem.percentage = "30"
              let tasks = that.data.tasks.filter(item => item.id != currentItem.id)
              let tasking = that.data.tasking
              let mytasks = that.data.mytasks
              tasking.push(currentItem)
              mytasks.push(currentItem)
              that.setData({
                tasks,
                tasking,
                mytasks
              })
              wx.setStorage({
                key: 'alltasks',
                data: that.data,
              })
              console.log("this.data---", that.data)
            })
            .catch(() => {
              Dialog.close();
            });
        }
      }
    })
  },
})