// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("movies/new-movie.hbs", {
      celebrities: celebrities,
    });
  } catch (error) {
    next(error);
  }
});

//GET "/movies/:id" => render movies details
router.get("/:id", async (req, res, next) => {
  try {
    const singleMovie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details.hbs", {
      singleMovie,
    });
  } catch (error) {
    next(error);
  }
});

// POST "/create" => send data to DB
router.post("/create", async (req, res, next) => {
  try {
    // console.log(req.body)
    await Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    });
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

//GET "/movies" => render movies list
router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    // console.log(allMovies)
    res.render("movies/movies.hbs", { allMovies });
  } catch (err) {
    next(err);
  }
});

// POST "movies/:id/delete" => deleting movies from DB
router.post("/:id/delete", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

//GET "/movies/:id/edit" => render form to edit movies
router.get("/:id/edit", async (req, res, next) => {
  try {
    const singleMovie = await Movie.findById(req.params.id).populate("cast");
    console.log(singleMovie.cast);
    const allCelebrities = await Celebrity.find();
    
    const clone = structuredClone(allCelebrities);
    // intento frustrado de bonus it. 10 para filtrar las celebrities 
    singleMovie.cast.forEach((actor) => {
      clone.forEach((actor2, index) => {
        if (actor.name === actor2.name) {
          clone.splice(index, 1);
        }
      });
    });
    console.log(clone);
    res.render("movies/edit-movie.hbs", {
      singleMovie,
      celebrities: allCelebrities,
    });
  } catch (err) {
    next(err);
  }
});

// POST "movies/:id/edit" => editing movies from DB
router.post("/:id/edit", async (req, res, next) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    });

    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
