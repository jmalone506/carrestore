const router = require("express").Router();
const db = require("../../models/Cars");

router.get("/accessorize", (req, res) => {
    // Use a regular expression to search titles for req.query.q
    // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
    db.Recipe.find({
        Make_Name: { $regex: new RegExp(req.query.q, 'i') }
    })
        .then(recipes => res.json(recipes))
        .catch(err => res.status(422).end());
});

module.exports = router;
