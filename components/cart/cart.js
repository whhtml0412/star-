angular.module('cartModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/cart',{
                templateUrl:'components/cart/cart.html',
                controller:'cartCtrl',
                css:'components/cart/cart.css'
            })
    }])
    .controller('cartCtrl',['$scope',function($scope){
    }]);