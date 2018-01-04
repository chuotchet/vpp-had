var myApp = angular.module('myApp',[]);

myApp.controller('Layout',function($http,$scope,$rootScope){
  $http.get('/catnsub').then(function(result){
    console.log(result.data);
    $rootScope.menu = result.data.catnsub;
  });
});

myApp.controller('Home',function($http,$scope,$rootScope){
  $http.get('/homitem').then(function(result){
    console.log(result.data);
    $scope.items = result.data.homitem;
  });
});
