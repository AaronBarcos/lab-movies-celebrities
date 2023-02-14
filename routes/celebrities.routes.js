const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

// GET "/celebrities" => render list of celebrities

router.get("/", async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find()
        res.render("celebrities/celebrities.hbs", {
            celebrities: celebrities
        })
    } catch (error) {
        next(error)
    }
})

// GET "/celebrities/create" => render form to create a celebrity
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
})

// POST "/celebrities/create" => send data to DB
router.post("/create", async (req, res, next) => {
    try {
        // console.log(req.body)
        await Celebrity.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        res.redirect("/celebrities")

    } catch (err) {
        next(err)
    }
})

// GET "/celebrities/:id" => render celebrity details
router.get("/:id", async (req, res, next) => {
    try {
        const celebrityInfo = await Celebrity.findById(req.params.id)
        
        res.render("celebrities/celebrities-details.hbs", celebrityInfo)
    } catch (err) {
        next(err)
        
    }
  })

// POST "/celebrities/:id/detele" => delete celebrity
router.get("/:id/delete")
  

module.exports = router;