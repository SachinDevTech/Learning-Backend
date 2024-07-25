const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get("/register", (req, res) => {
    let { username } = req.query;
    console.log("GET Request Query:", req.query); // Debugging log
    res.send(`Standard GET response. Welcome ${username} to CodeCurrents.`);
});

app.post("/register", (req, res) => {
    let { username, password } = req.body;
    console.log("POST Request Body:", req.body); // Debugging log
    res.send(`Standard POST response. I'm ${username}.`);
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});