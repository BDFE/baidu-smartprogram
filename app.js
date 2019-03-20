/* globals App */

App({
    globalData: {
        share: false, // 分享默认为false
        statusBarHeight: 0,
        windowWidth: 0,
        windowHeight: 0,
        center: {
            x: 0,
            y: 0
        },
        userInfo: 'user'
    },
    data: {
        // 组件所需的参数
        nvabarData: {
            showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
            title: '我的主页', //导航栏 中间的标题
        },
        // 此页面 页面内容距最顶部的距离
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数 
        console.log('onLoad');
    },
    onReady: function () {
        // 监听页面初次渲染完成的生命周期函数
        console.log('onReady');
    },
    onLaunch: function (options) {
        // 判断是否由分享进入小程序
        if (options.scene == 1007 || options.scene == 1008) {
            this.globalData.share = true
        } else {
            this.globalData.share = false
        };
        //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
        //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
        //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
        //虽然最后解决了，但是花费了不少时间
        swan.getSystemInfo({
            success: (res) => {
                this.globalData.statusBarHeight = res.statusBarHeight;
                this.globalData.windowWidth = res.windowWidth;
                this.globalData.windowHeight = res.windowHeight;
                let centerX = res.windowWidth / 2;
                let centerY = (res.windowHeight - res.statusBarHeight) / 2;
                this.globalData.center = {
                    x: centerX,
                    y: centerY
                };
                console.log('get globalData', this.globalData);
            }
        })
    },
    onShow(event) {
        console.log('onShow');
        // swan.navigateTo({
        //     // url:'/pages/productdetail/productdetail'
        //     url: '/pages/map/index'
        // })
    },
});