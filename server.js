import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("/index.html");
});

app.get('/login', (req, res) => {
  res.send("/public/login.html");
});

app.get('/register', (req, res) => {
    res.send("/public/register.html");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});