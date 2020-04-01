App({
  onLaunch(options) {
    // Do something initial when launch.
    wx.setStorage({
      key: 'alltasks',
      data: {
        tasks: [
          {
            id: 1,
            title: "帮忙取快递",
            content: "去10号楼去快递 送至12号楼下",
            phone: "1350000000",
            date: "2020-03-27",
            time: "08:00"
          },
          {
            id: 2,
            title: "帮忙寄快递",
            content: "1号楼 寄快递 重一公斤内 ",
            phone: "1356666666",
            date: "2020-03-27",
            time: "12:00"
          },
          {
            id: 3,
            title: "招募志愿者",
            content: "招聘会 志愿者 详情电寻",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 4,
            title: "图书馆招聘图书管理员",
            content: "图书馆招聘图书管理员",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 5,
            title: "食堂招聘兼职",
            content: "食堂招聘兼职",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 6,
            title: "招募志愿者",
            content: "招聘会 志愿者 详情电寻",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 7,
            title: "帮忙打热水",
            content: "帮忙打热水 1号楼 3层",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 8,
            title: "宣传海报制作",
            content: "宣传海报制作 详情电联",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 9,
            title: "晚会现场布置",
            content: "晚会现场布置 详情电联",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          },
          {
            id: 10,
            title: "帮忙取蛋糕",
            content: "帮忙取蛋糕 学校内蛋糕店 详情电联",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          }
        ],
        tasking: [
          {
            id: 11,
            title: "帮忙取蛋糕",
            content: "帮忙取蛋糕 学校内蛋糕店 详情电联",
            phone: "1358888888",
            date: "2020-03-28",
            time: "10:00"
          }
        ]
      },
    })
  },
  onShow(options) {
   
  },
   
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})