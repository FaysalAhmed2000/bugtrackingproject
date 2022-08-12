const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:String,
    password:String,
    role:String,
})

const usermodel = mongoose.model('User',schema)

module.exports = usermodel;