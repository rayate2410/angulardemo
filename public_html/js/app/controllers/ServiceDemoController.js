var angularDemoApp = angular.module('angularDemoApp',[]);

angularDemoApp.controller('ServiceDemoController', ['$scope', 'massage', function($scope, massage) {
    $scope.giveMeMassage = function(){
        massage();
    };
}]).
factory('massage', function(){
    return function(){
        alert("This is from massage service. And That'll be $80/hour.");
    }
});