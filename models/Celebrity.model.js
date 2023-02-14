//  Add your code here
const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model("celebrities", celebritySchema)

module.exports = Celebrity
