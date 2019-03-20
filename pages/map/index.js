const appInstance = getApp()
console.log('data', appInstance.globalData)
Page({
    data: {
        scale: 16,
        latitude: '40.048828',
        longitude: '116.280412',
        markers: [{
            markerId: 'center-marker',
            latitude: '40.048828',
            longitude: '116.280412',
            iconPath: '../../images/point.png',
            callout: {
                // display: 'ALWAYS',
                // content: '上报位置'
            }
        }],
        showLocation: '1',
        centerInfo: '选择上报位置',
        showOk: "1",
    },
    lifetimes: {
        attached() {
            // console.log('map attached');
        },
        detached: function () {}
    },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    onOk(e) {
        console.log('cover-img ok:');
    },
    onUpdated(e) {
        console.log('onUpdated callback::');
        this.updateCenter();
    },
    onCenterPngTap() {

    },
    updateCenter() {
        // this.mapContext.getRegion({
        //     success: (res) => {
        //         console.log('getRegion', res)
        //     }
        // });
        this.mapContext.getCenterLocation({
            success: (res) => {
                let latitude = res.latitude;
                let longitude = res.longitude;
                this.translateMarker(longitude, latitude);
                this.setData({
                    longitude: longitude,
                    latitude: latitude,
                });
            },
            fail: e => {
                console.log('fail', e);
            },
            complete: e => {
                console.log('compelete', e);
            }
        })
    },
    translateMarker(longitude, latitude) {
        console.log('translateMarker');
        this.mapContext.translateMarker({
            markerId: 'center-marker',
            rotate: 0,
            autoRotate: true,
            duration: 1000,
            destination: {
                latitude: latitude,
                longitude: longitude,
            },
            fail: () => {
                console.log('fail');
            },
            animationEnd: () => {
                console.log('animation end');
            },
            success: () => {
                console.log('success');
                this.markerAnimationEnd = true;
            }
        })
    },
});