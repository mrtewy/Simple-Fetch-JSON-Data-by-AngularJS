angular.module('TawanAngJSTest',[])
  .controller('usercontroller', function($scope, $http){
    $http.get('usercontroller.json')
    .success(function(users){
    $scope.people = users;});
  });