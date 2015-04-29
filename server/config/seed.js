/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Order = require('../api/order/order.model');
Order.find({}).remove(function() {
  Order.create({
    cupcakeFlavor : 'Vanilla',
    date : Date.now,
	author: 'nathan',
	dest: '1234 wall st.'
  }, {
    cupcakeFlavor : 'Chocolate',
    date : Date.now,
	author: 'Becky',
	dest: '1234 Spring st.'
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'recipe1',
    info : 'recipe1'
  }, {
    name : 'recipe2',
    info : 'recipe2'
  }, {
    name : 'recipe3',
    info : 'recipe3'
  },  {
    name : 'recipe4',
    info : 'reicpe4'
  },  {
    name : 'recipe5',
    info : 'recipe5'
  },{
    name : 'recipe6',
    info : 'recipe6'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});