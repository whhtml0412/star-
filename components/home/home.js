angular.module('homeModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'components/home/home.html',
                controller:'homeCtrl',
                css:'components/home/home.css'
            })
    }])
    .service('swiper',['$timeout',function($timeout){
        $timeout(function(){
            new Swiper ('.swiper-container', {
                loop: true,
                autoplay:1000,
                // 如果需要分页器
                pagination: '.swiper-pagination'
            })
        },10);
    }])
    .controller('homeCtrl',['$scope',"$http","swiper",function($scope,$http){
        $http.get("json/home.json").success(function(res){
            console.log(res);
            $scope.arrSwiper=res.data.act_info[0].act_rows;
            $scope.arrIcon=res.data.act_info[1].act_rows;
            $scope.arrItem=res.data.act_info[3].act_rows;
            $scope.arrCvs_div=res.data.act_info[4].act_rows[0].act_rows;
            $scope.arrCvs_hot=res.data.act_info[4].act_rows[1].act_rows;
            $scope.arrCvs_more=res.data.act_info[4].act_rows[2].act_rows;
            $scope.arrCvs_ad=res.data.act_info[4].act_rows[3].act_rows;
            $scope.arrCategory_list=res.data.act_info[5].act_rows;
        })
    }]);