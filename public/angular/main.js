var myApp = angular.module('myApp',[]);

myApp.controller('Test',function($http,$scope,$rootScope){
  $http.get('/catnsub').then(function(result){
    console.log(result.data);
    $rootScope.menu = result.data.catnsub;
  });
});
