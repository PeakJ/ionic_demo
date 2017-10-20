APP.controller('qrCodeCtrl',function($scope){
    var qrnode = new AraleQRCode({
        text: 'http://m.ehaier.com/www/index.html',
        size: 256,
        image: 'http://appimg.meitudata.com//8//521c5df4806c18025.jpg',
        imageSize: 106,
      });
      document.getElementById('qrcodeDefault').appendChild(qrnode);
});