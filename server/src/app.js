const express = require("express"); // loads a package (express) installed in node_modules
const hello = require("./hello");

const app = express(); // creates an Express application object. app is now your server “controller” where you define routes, middleware, settings, etc.
const port = 5000; //This is the port number your server will listen on. http://localhost:5000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Hello world test!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
