const express = require('express')
const app = express()

// console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening at port: ${port}`);
});


// app.use-----------------
// app.use((req, res) => {
//     //   res.send('Hello World')
//     // console.log(req); //many kind of method and properties will show down in terminal as we are calling 'req' object :)
//     console.log("Request recieved!");
//     // we simply can send the response to the requests
//     // res.send({
//     //     name: "Banana",
//     //     color: "Yellow",
//     // });


//     // --------------------------------------
//     let code = "<h1>Colors</h1> <ul> RGB are as: <li> Red</li> <li> Green</li> <li> Blue </li>"
//     res.send(code);
// });


// ---------------------------------------------------------------------------------------------
// app.get


app.get("/", (req, res) => {
    res.send("You requested for root path");
});
// app.get("/apple", (req, res) => {
//     res.send("You requested for /apple path, You can put meaningfull part of your website");
// });
// app.get("/mango", (req, res) => {
//     res.send("You requested for /mango path.");
// });

// app.get("*", (req, res) => {
//     res.send("This path does'nt exist.");
// });


// ------------------------------------------variable username--------------
// app.get("/:username", (req, res) => {
//     let { username } = req.params;
//     res.send(`This account belongs to ${username}`);
// })

// ------------------variable username with id--------------
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    // console.log(req.params);
    res.send(`Welcome to: @${username} with id: #${id}`);
});


// we also can create htmlString as: 

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    // console.log(req.params);
    let htmlString = `<h1>Welcome to: @${username} with id: #${id}!</h1>`;
    res.send(htmlString);
});

// ------------Query Strings--------------
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("You haven't search for any query.")
    }
    console.log(req.query);
    res.send(`<h1>Search results for query: ${q}</h1>`);
});

