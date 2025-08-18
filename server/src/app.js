const express = require("express");
const { hello } = require("./test");

// const { hello } = require("./test");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    // hello(),
    res.send("Hello World!");
});
app.get("/test", (req, res) => {
    hello();
    res.send("test");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
