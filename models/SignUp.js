const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name:{ 
        type: String
    },
    email: { 
        type: String
    },
    password: { 
        type: String
    },
    id: { 
        type: String 
    },
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


export default mongoose.model("User", userSchema);