const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
app.use(express.urlencoded({ extended: true }));

// Setting view engine to EJS
app.set("view engine", "ejs");

// Setting the path to the views directory
app.set("views", path.join(__dirname, "views"));

// Serving static files like CSS
app.use(express.static(path.join(__dirname, "public")));

// In-memory storage for posts
let posts = [
  { username: "sachindevtech", content: "Software Developer" },
  { username: "gauravyadav_70", content: "Data Analyst" },
  { username: "sachinkumar", content: "Business Analyst" }
];

// Display posts
app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

// Create a new post
app.post("/create-post", (req, res) => {
  const { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

// Edit a post
app.post("/edit-post/:index", (req, res) => {
  const index = req.params.index;
  const newContent = req.body.content;
  if (posts[index]) {
    posts[index].content = newContent;
  }
  res.redirect("/posts");
});

// Delete a post
app.post("/delete-post/:index", (req, res) => {
  const index = req.params.index;
  if (posts[index]) {
    posts.splice(index, 1);
  }
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});