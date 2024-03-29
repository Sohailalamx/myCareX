import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/problem', (req, res) => {
    res.render("problem.ejs");
})

app.get('/blog', (req, res) => {
    res.render("blog.ejs");
})

app.get('/history', (req, res) => {
    res.render("history.ejs");
})
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
