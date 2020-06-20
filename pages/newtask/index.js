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
  titleChange: function (e) {
    this.setData({
      title: e.detail
    })
  },
  contentChange: function (e) {
    this.setData({
      content: e.detail
    })
  },
  savetask:function(){
    let newdata=this.data
    let data=wx.getStorageSync("alltasks")
    //let mytasks = data.mytasks
    let tasks = data.tasks
    let bb = new Array();//创建一个空数组，用于存放id字段的值
    // for(let i=0;i<mytasks.length;i++){
    //     bb.push(mytasks[i].id);
    // };
    for(let i=0;i<tasks.length;i++){
      bb.push(tasks[i].id);
  };
    newdata.id=Math.max(...bb)+1
    //data.mytasks.push(newdata)
    data.tasks.unshift(newdata)
    wx.setStorage({
      key: 'alltasks',
      data: data,
    })
    wx.switchTab({url: '../tasks/index'})
  }
})