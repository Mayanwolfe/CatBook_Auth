const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFood: String,
  funFact: String,
  image: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model('Cat', CatSchema);