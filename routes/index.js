const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const signUpTemplateCopy = require("../models/SignUp")

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.post("/home", (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        email:req.body.email,
        password:req.body.password
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.jason(err)
    })
})

module.exports = router;
