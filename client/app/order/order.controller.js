'use strict';

angular.module('cupcakeStoreApp')
  .controller('OrderCtrl', function ($scope, $http, socket, User) {
    $scope.Orders = [];

    $http.get('/api/orders').success(function(orders) {
      $scope.orders = orders;
      socket.syncUpdates('order', $scope.orders);
    });

    $scope.addOrder = function() {
      if($scope.newOrder === '') {
        return;
      }
      $http.post('/api/orders', { name: $scope.newOrder });
      $scope.newOrder = '';
    };
  });
