// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var APP = angular.module('starter', ['ionic']);

APP.run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        document.addEventListener('online', function() {
            $('#networkIndicator1').remove();
            var status = checkConnection();
            if (status == 'Cell2GConnection') {
                $('body').append('<div id="networkIndicator2" style="width:100%;height:44px;background-color:#FEE;line-height:44px;color:#333;position:fixed;z-index:10;top:44px;"><span style="display:inline-block;width:20px;height:20px;line-height:20px;background-color:#f00;color:#fff;text-align:center;border-radius:50%;margin:0 10px;">!</span><span>当前网络环境较差，请切换到WiFi环境使用</span><img onclick="closeTip()" src="./img/Clear@2x.png" style="position: absolute;top: 12px;right: 5px;width: 20px;"></div>');
            } else {
                $('#networkIndicator2').remove();
            }
        }, false);
        document.addEventListener('offline', function() {
            var status = checkConnection();
            if (status == 'NoNetworkConnection') {
                $('body').append('<div id="networkIndicator1" style="width:100%;height:44px;background-color:#FEE;line-height:44px;color:#333;position:fixed;z-index:10;top:44px;"><span style="display:inline-block;width:20px;height:20px;line-height:20px;background-color:#f00;color:#fff;text-align:center;border-radius:50%;margin:0 10px;">!</span><span>网络连接不可用,请检查网络设置</span><img onclick="closeTip()" src="./img/Clear@2x.png" style="position: absolute;top: 12px;right: 5px;width: 20px;"></div>');
            }
        }, false);
        window.closeTip = function closeTip() {
            $('#networkIndicator1').remove();
            $('#networkIndicator2').remove();
        };

        function checkConnection() { //检测网络环境
            if (!window.Connection) return;
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'UnknownConnection';
            states[Connection.ETHERNET] = 'EthernetConnection';
            states[Connection.WIFI] = 'WiFiConnection';
            states[Connection.CELL_2G] = 'Cell2GConnection';
            states[Connection.CELL_3G] = 'Cell3GConnection';
            states[Connection.CELL_4G] = 'Cell4GConnection';
            states[Connection.CELL] = 'CellGenericConnection';
            states[Connection.NONE] = 'NoNetworkConnection';
            return states[networkState];
        }
    });
}])

APP.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive

    // Each tab has its own nav history stack:

        .state('dash', {
            url: '/dash',
            templateUrl: 'templates/dash.html',
            controller: 'DashCtrl'
        })
        .state('analyzeStreet', {
            url: '/analyzeStreet',
            templateUrl: 'templates/myPage/analyzeStreet.html',
            controller: 'analyzeStreetCtrl'
        })
        .state('qrCode', {
            url: '/qrCode',
            templateUrl: 'templates/myPage/qrCode.html',
            controller: 'qrCodeCtrl'
        })
        .state('cube', {
            url: '/cube',
            templateUrl: 'templates/myPage/cube.html',
        })
        .state('tingyun', {
            url: '/tingyun',
            templateUrl: 'templates/myPage/tingyun.html',
            controller: 'tingyunCtrl'
        }).state('recordRoll', {
            url: '/recordRoll',
            templateUrl: 'templates/myPage/recordRoll.html',
            controller: 'recordRollCtrl'
        });;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dash');

}]);