var angularDemoApp = angular.module('angularDemoApp',[]);

angularDemoApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola motherfuckers!';
    
    $scope.youSuckFunction = function(name) {
      $scope.suckingMessage = "You suck, " + name;
    };
    
    $scope.multiply = function(a, b) {
      return a*b;
    };
    
    $scope.mylist = ['hi', 'these', 'items', 'are', 'coming', 'from', 'array'];
    $scope.superheroes = [{'name':'Batman', 'identity': 'Bruce Wayne'}, 
                          {'name':'Superman', 'identity': 'Clark Kent'}, 
                          {'name':'Green Arrow', 'identity': 'Olliver Queen (Stephen Amell!)'},
                          {'name':'Flash', 'identity': 'Barry Allen'}
                        ];
}]);