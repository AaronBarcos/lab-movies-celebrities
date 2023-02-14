const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Rutas de celebrities
const celebritiesRoutes = require("./celebrities.routes.js")
router.use("/celebrities", celebritiesRoutes)
// Rutas de movies
const moviesRoutes = require("./movies.routes.js")
router.use("/movies", moviesRoutes)

router.get("/create", async (req, res, next) => {
  const response = await Celebrity.create({
    name: "Jose Luis",
    age: 26
  })
})

module.exports = router;
