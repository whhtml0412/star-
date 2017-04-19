angular.module('marketModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/market',{
                templateUrl:'components/market/market.html',
                controller:'marketCtrl',
                css:'components/market/market.css'
            })
    }])
    .controller('marketCtrl',['$scope',"$http",function($scope,$http){
        $http.get("json/market.json").success(function(res){
            console.log(res);
            $scope.arrNav_list=res.data.categories;
            $scope.arrMarket_List=res.data.products[104749];
            $scope.changeList=function (id,index) {
                $scope.arrMarket_List=res.data.products[id];
                $scope.arrType_list=res.data.categories[index].cids;
                $scope.showList=function(){
                    $scope.isShow=!$scope.isShow;
                };
                $scope.toType=function(){

                }
            };
            $scope.sortList=function () {

            };
            $scope.num=0;
            $scope.addNum=function () {
                $scope.num++
            };
            $scope.minusNum=function () {
                $scope.num--
            };

            $scope.addClass=function () {
                $scope.className='activity';
            }
        });
    }]);