const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  category: String,
  description: String,
  author: String,
  publisher: String,
  price: Number,
  cover: String
});

BookSchema.methods.truncText = function(length) {
  if(this.description == null || this.description == '')
    return this.description;
  return this.description.substring(0, length);
}

module.exports = mongoose.model('Book', BookSchema);
