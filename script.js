var app = angular.module('tasksapp',[]);
app.controller('taskscontroller',function($scope){
  $scope.tasks = [];
  $scope.add = function() {
      $scope.tasks.push($scope.title);
  };
});
