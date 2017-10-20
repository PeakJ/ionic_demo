APP.controller('DashCtrl',['$scope','commonService',function ($scope, commonService) {
 
  $scope.$on('$ionicView.enter', function (e) {

  });
  var qrnode = new AraleQRCode({
    text: 'http://m.ehaier.com/www/index.html',
    size: 256,
    image: 'http://appimg.meitudata.com//8//521c5df4806c18025.jpg',
    imageSize: 106,
  });
  // document.getElementById('qrcodeDefault').appendChild(qrnode);
}])

APP.controller('ChatsCtrl', ['$scope','Chats',function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  };
}])

APP.controller('ChatDetailCtrl', ['$scope','$stateParams','Chats',function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}])

APP.controller('AccountCtrl',['$scope', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
}])
