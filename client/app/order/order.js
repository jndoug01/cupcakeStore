'use strict';

angular.module('cupcakeStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      });
  });