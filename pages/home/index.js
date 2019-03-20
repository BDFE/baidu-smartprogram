//index.js
//获取应用实例
Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '下拉标题', //导航栏 中间的标题
    },
    // 此页面 页面内容距最顶部的距离
    height: 200,
  },
  onLoad() {
    // this.appInstance = getApp()
    // this.setData("height", this.appInstance.globalData.statusBarHeight * 2 + 20)
    // console.log('home loaded', this.data.height);
  }
})