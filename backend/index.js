const express = require("express");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const dotenv = require("dotenv"); // Enviroment Variables Global
const session = require("express-session");
const database = require("./config/db"); // MongoDB
const passport = require('passport');
const cors = require("cors");
//config accessing the global variables
dotenv.config({ path: "./config/config.env" });
// Passport Config
require('./config/passport')(passport);
//calling DB in config
database();

const app = express();
//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT, // <-- location of the react app were connecting to
        credentials: true,
    })
);

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//connect flash
app.use(flash());

//For Login page we declare global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
});

//add the current user as a global variable
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use("/", require("./routes/login"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT : ${PORT}`));
