const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");
const User = require("./models/User");
const Patient = require("./models/Patient");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bnncollege:collegebnn@bnncollege.syf0g8h.mongodb.net/userdb?retryWrites=true&w=majority",
  () => {
    console.log("Connection Successful");
  }
);
// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());
app.use(cors());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.status(200);
  } else {
    next();
  }
};

app.get("/", sessionChecker, (req, res) => {
  res.send("Hello");
});

app.post("/login", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  try {
    var user = await User.findOne({ email: email }).exec();
    console.log(user);

    if (!user) {
      res.status(403).json({
        success: false,
        message: "User not found",
      });
    }

    user.comparePassword(password, (error, match) => {
      if (!match) {
        res.status(403).json({
          success: false,
          message: "Incorrect Password",
        });
      }
    });

    req.session.user = user;
    res.status(200).json({
      success: true,
      redirectUrl: "/MainPage",
      sessionName: user.name,
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/signup", (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    age: req.body.age,
    mobile: req.body.mobile,
    password: req.body.password,
  });

  user.save((err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      req.session.user = docs;
      res.status(201).send(docs);
    }
  });
});

app.post("/patient", (req, res) => {
  const patient = new Patient({
    category: req.body.category,
    speciality: req.body.speciality,
    name: req.body.name,
    mobile: req.body.mobile,
    address: req.body.address,
    price: req.body.price,
  });

  patient.save((err, docs) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(docs);
      console.log(docs);
    }
  });
});

app.get("/Medicine", (req, res) => {
  Patient.find({ category: "Medicine" })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

app.get("/Patient", (req, res) => {
  Patient.find({ category: "Speciality" })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json({ message: e });
    });
});

app.post("/logout", (req, res) => {
  res.clearCookie("user_sid");
  res.json({
    success: true,
    redirectUrl: "/",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
