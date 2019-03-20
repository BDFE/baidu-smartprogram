Component({
    properties: {
        navbarData: { //navbarData   由父页面传递的数据，变量名字自命名
            type: Object,
            value: {},
            observer: function (newVal, oldVal) {}
        }
    },
    data: {
        height: 0,
    },
    lifetimes: {
        attached() {
            console.log('navbar attached');
            this.appInstance = getApp()
            console.log(this.appInstance.globalData)
            this.setData({
                height: this.appInstance.globalData.statusBarHeight
            })
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        }
    },
    methods: {
        // 返回上一页面
        _navback() {
            swan.navigateBack()
        },
        //返回到首页
        _backhome() {
            swan.switchTab({
                url: '/pages/home/index',
            })
        }
    }

})