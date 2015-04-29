'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  cupcakeFlavor: String,
  date: { type: Date, default: Date.now },
   Author: { type: Schema.Types.ObjectId, ref: 'User.name' }
});

module.exports = mongoose.model('Order', OrderSchema);
