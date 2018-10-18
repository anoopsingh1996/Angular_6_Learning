var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
     .when('/home',{
       templateUrl: 'views/home.html'
     })
     .when('/dir',{
       templateUrl: 'views/dir.html',
       controller: 'NinjaController'
     }).otherwise({
       redirectTo: '/home'
     });
}]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };
  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });
    $scope.newninja.name = "",
    $scope.newninja.belt = "",
    $scope.newninja.rate = ""

  };
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true,
      thumb: "content/img/nin.png"
    },
    {
      name: "crystal",
      belt: "yellow",
      rate: 30,
      available: false,
      thumb: "content/img/nin.png"
    },
    {
      name: "Shan",
      belt: "black",
      rate: 1000,
      available: true,
      thumb: "content/img/nin.png"
    }
  ];
}]);
