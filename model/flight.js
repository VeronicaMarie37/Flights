const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  destination: String,
  departure: String,
});

module.exports = mongoose.model('Flight', flightSchema);
