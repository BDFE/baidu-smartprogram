Page({
  data: {
    typeID: 0,
    isLoading: true,
    loadOver: false,
    districtList: [],
    sortingList: [{
      key: 1,
      value: "智能排序"
    }, {
      key: 2,
      value: "价格最低"
    }, {
      key: 3,
      value: "价格最高"
    }, {
      key: 4,
      value: "服务最好"
    }, {
      key: 5,
      value: "环境最好"
    }, {
      key: 6,
      value: "预约最快"
    }],

    districtChioceIcon: "/images/icon-go-black.png",
    sortingChioceIcon: "/images/icon-go-black.png",
    chioceSorting: false,
    scrollTop: 0,
    scrollIntoView: 0,
    activeSortingIndex: -1,
    activeSortingName: "综合排序"
  },
  onLoad: function (options) {},
  onPullDownRefresh: function () {
    this.setData({
      productList: [],
      pageIndex: 1,
      loadOver: false,
      isLoading: true
    });
    //this.getProductList();
    swan.stopPullDownRefresh();
  },
  onReachBottom: function () {
    if (!this.data.loadOver) {
      this.setData({
        pageIndex: this.data.pageIndex + 1,
        isLoading: true,
        loadOver: false
      });
      //this.getProductList();
    }
  },
  //条件选择
  choiceItem: function (e) {
    switch (e.currentTarget.dataset.item) {
      case "2":
        {
          if (this.data.chioceSorting) {
            this.setData({
              districtChioceIcon: "/images/icon-go-black.png",
              sortingChioceIcon: "/images/icon-go-black.png",
              chioceDistrict: false,
              chioceSorting: false,
              chioceFilter: false
            });
          } else {
            this.setData({
              districtChioceIcon: "/images/icon-go-black.png",
              sortingChioceIcon: "/images/icon-down-black.png",
              chioceDistrict: false,
              chioceSorting: true,
              chioceFilter: false
            });
          }
        }
    }
  },
  hideAllChioce: function () {
    this.setData({
      districtChioceIcon: "/images/icon-go-black.png",
      sortingChioceIcon: "/images/icon-go-black.png",
      chioceDistrict: false,
      chioceSorting: false,
      chioceFilter: false
    });
  },
  selectSorting: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      sortingChioceIcon: "/images/icon-go-black.png",
      chioceSorting: false,
      activeSortingIndex: index,
      activeSortingName: this.data.sortingList[index].value,
      productList: [],
      pageIndex: 1,
      loadOver: false,
      isLoading: true
    });
  },
  //筛选
  onShareAppMessage: function () {}
});