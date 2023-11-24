const express = require("express");
const ViteExpress = require("vite-express");
const router = require('./router');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res, next) => {
  res.send("Hello Vite!");
  next();
});

app.use('/api/v1/', router);

ViteExpress.listen(app, PORT, () => {
  console.log(`CoolRain Server is listening on Port: ${ PORT }`);
});
