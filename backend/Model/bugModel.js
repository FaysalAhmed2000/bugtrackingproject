const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id:Number,
    details:String,
    steps:String,
    version:String,
    priority:String,
    assigned:String,
    creator:String,
    time:Number,
})

const bugmodel = mongoose.model('Bug', schema)


module.exports = bugmodel;