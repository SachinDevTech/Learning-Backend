const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Standard GET response. Welcome "${username} to Tech ImapctX"`);
});

app.post("/register", (req, res) => {
    // let { username, password } = req.body;
    console.log(req.body);
    res.send(`Standard POST response.`);
});

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});