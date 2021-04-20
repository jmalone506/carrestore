const User = require("../../models/SignUp");
const { default: UserSession } = require("../../models/UserSession");

module.exports = (app) => {

app.post("/api/account/signup", (req,res, next) => {
    const { body } = req;
    const {
        name,
        email,
        password
    } = body;

    if(!name) {
        return res.send({
            success:false,
            message: "You forgot your name!"
        });
    }
   
    if (!password) {
        return res.send({
            success: false,
            message: "You forgot your password!"
        });
    }
    email = email.toLowerCase();
    
    User.find({
        email: email 
    }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: "You forgot your email!"
            });
        } else if (previousUsers.length > 0) {
            return res.send("account already exist")
        }

        const newUser = new User();
        newUser.email = email;
        newUser.name = name;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
        if(err) {
            return res.send({
                success: false,
                message: "error"
            })
        }
            return res.send({
            success: true,
            message: "sign up!"
        })
        })
    })

})

}