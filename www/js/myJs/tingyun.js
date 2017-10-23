APP.controller('tingyunCtrl', ['$scope', '$http', function ($scope, $http) {
    var page_event = null;
    $scope.button1Click = function () {
        var event = TINGYUN.createEvent({
            name: '按钮1点击事件',
            key: 'dd71458d-07e7-4dc2-bc2c-679bee4410df'
        });
        event.end();
        alert('按钮一点击了');
    };
    $scope.button2Click = function () {
        var event = TINGYUN.createEvent({
            name: 'github百科',
            key: '843b201b-3dfe-44d9-a764-120c228f02de'
        });
        var url = 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=github&bk_length=100000';
        $http.get(url)
            .success(function (response) {
                console.log(response);
                alert('查询成功');
                event.end();
            })
            .error(function (error) {
                event.fail();
            })
    };
    $scope.button3Click = function () {
        var event = TINGYUN.createEvent({
            name: '延时事件',
            key: 'ae034124-bdc9-45d0-a29c-ccf74eda3085'
        });
        setTimeout(function () {
            event.end();
            alert('按钮三点击了');
        }, 6000);
    };
    $scope.$on('$ionicView.enter', function (e) {
        page_event = TINGYUN.createEvent({
            name: '页面跳转',
            key: 'eaa82c3e-7935-4de7-90dc-648a307058da'
        });
    });
    $scope.$on('$ionicView.leave', function (e) {
        page_event.end()
    });
}])