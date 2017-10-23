APP.controller('analyzeStreetCtrl', ['$scope', function ($scope) {
    $scope.obj = {
        testValue: null
    };
    $scope.streetName = '地址不够详细或者有误';
    $scope.$watch('obj.testValue', function (newValue, oldValue) {
        AMap.plugin('AMap.Geocoder', function () {
            var geocoder = new AMap.Geocoder({
                city: "全国"//城市，默认：“全国”
            });
            geocoder.getLocation($scope.obj.testValue, function (status, result) {
                if (status == 'complete' && result.geocodes.length) {
                    // console.log(result);
                    var lat = result.geocodes[0].location.lat;
                    var lng = result.geocodes[0].location.lng;
                    var lnglatXY = [lng, lat];
                    geocoder.getAddress(lnglatXY, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            console.log(result.regeocode);
                            if(newValue.length>0){
                                $scope.$apply(function () {
                                    $scope.streetName = result.regeocode.addressComponent.township;
                                })
                            }
                        } else {
                            console.log('获取位置失败');
                            if(oldValue&&newValue.length>0){
                                $scope.$apply(function () {
                                    $scope.streetName = '地址不够详细或者有误';
                                })
                            }
                        }
                    });
                } else {
                    console.log('未解析到相关街道');
                    if(oldValue&&newValue.length>0){
                        $scope.$apply(function () {
                            $scope.streetName = '地址不够详细或者有误';
                        })
                    }
                }
            })
        });
    })
}])