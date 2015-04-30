'use strict';

angular.module('cupcakeStoreApp')
  .controller('OrderCtrl', function ($scope, $http, socket) {
    $scope.orders = [];

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

    $scope.deleteOrder = function(order) {
      $http.delete('/api/orders/' + order._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('order');
    });
  });
