'use strict';
 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
var OrderSchema = new Schema({
  cupcakeFlavor: String,
  date: { type: Date, default: Date.now },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
          },
		  dest: String
});
 
OrderSchema.statics = {
  loadRecent: function(cb) {
    this.find({})
      .populate({path:'author', select: 'name'})
      .sort('-date')
      .limit(20)
      .exec(cb);
  }
};
 
module.exports = mongoose.model('Order', OrderSchema);