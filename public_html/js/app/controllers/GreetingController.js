var angularDemoApp = angular.module('angularDemoApp',[]);

angularDemoApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola motherfuckers!';
    
    $scope.youSuckFunction = function(name) {
      return "You suck, " + name;
    };
}]);