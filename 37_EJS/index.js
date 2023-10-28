const express = require("express");
const app = express();
const path = require("path"); //path also must be required whenever you are executing the index.js file from parent directory.

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //It recognizes the current directory of index,js and then finds "views" folder and then renders home.ejs files or others as well.



// getting data from /views/home.ejs and rendering it
app.get("/", (req, res) => {
    res.render("home.ejs");
});


// A basic route
app.get("/hello/", (req, res) => {
    res.send("Hello Ji - Hello Ji, Kaise ho aap ?");
});


// Dice route
app.get("/rollDice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceVal: num });
});



// // instagram route
// app.get("/ig/:username/", (req, res) => {
//     let {username} = req.params;
//     res.render("instagram.ejs" , {username});
// });

// Loops in instagram EJS
// app.get("/ig/:username/", (req, res) => {
//     const followers = ["Sachin", "Ashish", "Hrishabh", "Pushkar"]
//     let {username} = req.params;
//     res.render("instagram.ejs" , {username, followers});
// });

// instagram Project
app.use(express.static(path.join(__dirname, "/public/CSS/")));
app.use(express.static(path.join(__dirname, "/public/Javascript")));

app.get("/ig/:username/", (req, res) => {
    const instaData = require("./data.json");
    let { username } = req.params;
    const data = instaData[username];
    console.log(data);
    if (data) {
        res.render("instagramProject.ejs", { data });
    }
    else {
        res.render("error.ejs");

    }
});




// server listening user requests 
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});