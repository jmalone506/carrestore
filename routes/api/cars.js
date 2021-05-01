const router = require("express").Router();
const db = require("../../models/");

router.get("/accessorize", (req, res) => {
    // Use a regular expression to search titles for req.query.q
    // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
console.log(req.query.q)

    db.Car.find({
    
        make: { $regex: new RegExp(req.query.q, 'i') }
        // make: req.query.q
    })
        .then(cars => res.json(cars))
        .catch(err => res.status(422).end());


});

module.exports = router;
