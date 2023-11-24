const express = require("express");
const ViteExpress = require("vite-express");
const PORT = process.env.PORT || 3000;
const router = require('./router');

const app = express();

app.get("/hello", (req, res, next) => {
  res.send("Hello Vite!");
  next()
});

app.use('/api/v1/', () => router);

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...");
});
