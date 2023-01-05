const mongoose = require('mongoose');

const {connection} = mongoose.connect("mongodb");


module.exports = {connection}


