import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile("/index.html");
});

app.get('/login', (req, res) => {
  res.sendFile("./public/login.html");
});

app.get('/register', (req, res) => {
    res.sendFile("/public/register.html");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});