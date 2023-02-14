const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
// GET "/celebrities/create" => render form to create a celebrity
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
})

// POST "/celebrities/creatE" => send data to DB
router.post("/create", async (req, res, next) => {
    try {
        // console.log(req.body)
        await Celebrity.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        res.redirect("/")

    } catch (err) {
        next(err)
    }
})

module.exports = router;