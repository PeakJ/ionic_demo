APP.controller('recordRollCtrl', ['$scope', function($scope) {
    $scope.recordList = []; //中奖名单数组

    function createData() {
        for (var i = 0; i < 100; i++) {
            $scope.recordList.push('恭喜152*****12' + i + ' 抽中' + i + '元')
        }
    }

    $scope.$on('$ionicView.enter', function(e) {
        createData();
        // 第一种方式启动方法
        $(".record_list").RollTitle({ line: 1, speed: 3000, timespan: 1000 });

        // 第二种方法启动
        // $("div.list_lh").myScroll({
        //     speed: 40, //数值越大，速度越慢
        //     rowHeight: 44 //li的高度
        // });
    });
    $scope.$on('$ionicView.beforeLeave', function(e) {
        clearInterval($scope.timer);
    });
    // 第一种实现方法
    (function($) {
        $.fn.extend({
            RollTitle: function(opt) {
                if (!opt) var opt = {};
                var _this = this;
                $scope.timer = _this.timer = null;
                _this.lineH = _this.find("p:first").height();
                _this.line = opt.line ? parseInt(opt.line, 15) : parseInt(_this.height() / _this.lineH, 10);
                _this.speed = opt.speed,
                    _this.timespan = opt.timespan;
                if (_this.line == 0) this.line = 1;

                _this.scrollUp = function() {
                    _this.animate({
                        marginTop: 0
                    }, _this.speed, function() {
                        for (i = 1; i <= _this.line; i++) {
                            _this.find("p:first").appendTo(_this);
                        }
                        _this.css({ marginTop: 0 });
                    });
                }
                _this.hover(function() {
                    clearInterval(_this.timer);
                }, function() {
                    _this.timer = setInterval(function() { _this.scrollUp(); }, _this.timespan);
                }).mouseout();
            }
        })
    })(jQuery);

    // 第二种实现方法,有抖动的bug
    // (function($) {
    //     $.fn.myScroll = function(options) {
    //         //默认配置
    //         var defaults = {
    //             speed: 40, //滚动速度,值越大速度越慢
    //             rowHeight: 24 //每行的高度
    //         };

    //         var opts = $.extend({}, defaults, options),
    //             intId = [];

    //         function marquee(obj, step) {
    //             obj.find("ul").animate({
    //                 marginTop: '-=1'
    //             }, 0, function() {
    //                 var s = Math.abs(parseInt($(this).css("margin-top")));
    //                 if (s >= step) {
    //                     $(this).find("li").slice(0, 1).appendTo($(this));
    //                     $(this).css("margin-top", 0);
    //                 }
    //             });
    //         }

    //         this.each(function(i) {
    //             var sh = opts["rowHeight"],
    //                 speed = opts["speed"],
    //                 _this = $(this);
    //             intId[i] = setInterval(function() {
    //                 if (_this.find("ul").height() <= _this.height()) {
    //                     clearInterval(intId[i]);
    //                 } else {
    //                     marquee(_this, sh);
    //                 }
    //             }, speed);
    //         });
    //     }
    // })(jQuery);
}])