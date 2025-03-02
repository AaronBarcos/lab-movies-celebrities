const {Schema, model} = require("mongoose")

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [
        {
            type: Schema.Types.ObjectId,
            ref: "celebrities"
        }
    ]
})

const Movie = model("Movies", movieSchema)

module.exports = Movie;