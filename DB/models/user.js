const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },   
    email: {
        type: String
    },
    city: {
        type: String
    },
    profile: {
        type: String
    }
});

const User = mongoose.model("User", userShema,"userscollection");

module.exports = User;
