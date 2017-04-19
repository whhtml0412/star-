angular.module('aixianfeng',['ngRoute','angularCSS','homeModule','marketModule','cartModule','mineModule'])
    .config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/home'});
}]);