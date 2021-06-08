const mongoose = require("mongoose");

module.exports = async () => {
    await mongoose.connect("mongodb://localhost:27017/users",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('comnnection successful');
    }).catch((error) => {
        console.log('something wrong', error);
    })
}






