const mongoose = require('mongoose');
//connect - mongoose.connect;
//Model - mongoose.model
require('dotenv').config()

const connection = mongoose.connect(process.env.mongourl);

module.exports= {connection};


