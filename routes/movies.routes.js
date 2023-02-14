// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model");

// all your routes here


// GET "/celebrities/create" => render form to create a celebrity
router.get("/create", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find()
    res.render("movies/new-movie.hbs", {
        celebrities: celebrities
    });
  } catch (error) {
    next(error)
  }
});

// POST "/celebrities/creatE" => send data to DB
router.post("/create", async (req, res, next) => {
    try {
        // console.log(req.body)
        await Movie.create({
            name: req.body.name,
            genre: req.body.genre,
            plot: req.body.plot,
            cast: req.body.cast
        })
        res.redirect("/")

    } catch (err) {
        next(err)
    }
})




module.exports = router;