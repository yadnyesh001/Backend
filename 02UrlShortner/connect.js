const mongoose = require('mongoose');

async function connectToMongoDB(url) {
  return mongoose.connect(url); // No need for options in v4+
}

module.exports = { connectToMongoDB };
