'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  cupcakeFlavor: String,
  date: { type: Date, default: Date.now },
  author: String
});

module.exports = mongoose.model('Order', OrderSchema);
