const express = require('express');

const mongo = require('./mongoDBserver');

const app = express();

const port = 4242;

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {

        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, Date.now() + '.' + ext);
    }
});


const upload = multer({ storage: storage });

app.use(express.static("uploads/"))

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg'
}

const User = require("./models/user");

//const cors = require('cors');

//app.use(cors());

//app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser());

const { response } = require('express');


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
});
  

// ------ 1  add user Done ----------
app.post('/', upload.single('pic') ,(req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
   
    var creatUser = new User({
        username: req.body.username,
        email: req.body.email,
        city: req.body.city,
        //profile: req.file.filename
    });
    creatUser.save((err, data) => {
        if (err) {
            err.statusCode = 422;
            next(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});

// ------ 2 get all users Done ----------
app.get('/getusers', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    User.find().then((data)=>{
        console.log(data);
        res.send(data);
    });
});

// ------ 3 get user details ----------
app.get('/getuserinfo/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");


    User.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.send(data);
        }
    });
});

// ------ 5 delete   Done ----------
app.delete('/delete/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");


    User.deleteOne({ _id: req.params.id }).then(()=>{
        res.send("done");
    });

});

mongo();

app.listen(port, () => {
    console.log('server running');
})



