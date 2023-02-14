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

// POST "/creatE" => send data to DB
router.post("/create", async (req, res, next) => {
    try {
        // console.log(req.body)
        await Movie.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot,
            cast: req.body.cast
        })
        res.redirect("/movies")

    } catch (err) {
        next(err)
    }
})

//GET "/movies" => render movies list
router.get("/", async (req, res, next) =>{
  try {
    const allMovies = await Movie.find()
    // console.log(allMovies)
    res.render("movies/movies.hbs", {allMovies})
  } catch (err) {
    next(err)
  }
})




module.exports = router;