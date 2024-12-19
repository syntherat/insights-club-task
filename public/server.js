import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("../index.html");
});

app.get('/login', (req, res) => {
  res.send("./login.html");
});

app.get('/register', (req, res) => {
    res.send("./register.html");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});