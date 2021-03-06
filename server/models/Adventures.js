var mongoose = require('mongoose');

var AdventureSchema = new mongoose.Schema({
  title: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  adventure: [{
    riddle: String,
    answer: String,
    location: String,
    longitude: Number, // Maybe number, depends on google api
    latitude: Number, // Maybe number, depends on google api
    photo: String
  }],
  date: { type: Date, default: Date.now() },
  completedAll: { type: Boolean, default: false },
  startingLocation: String,
  stars: {
    oneStar: {type: Number, default: 0},
    twoStar: {type: Number, default: 0},
    threeStar: {type: Number, default: 0},
    fourStar: {type: Number, default: 0},
    fiveStar: {type: Number, default: 0},
  },
  photo: { type: String, default: "https://thenypost.files.wordpress.com/2015/08/spongebob-e1441057213584.jpg" }
});

var Adventure = mongoose.model('Adventure', AdventureSchema);

module.exports = Adventure;
