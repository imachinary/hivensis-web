const express = require("express");
const path = require("path");
const app = express();
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./server/api/routes");

const { HttpErrorHandler } = require("./server/middleware/HttpErrorHandler");
require("dotenv").config();

const { ErrorHandler } = require("./server/middleware/ErrorHandler");

app.use(cors());
app.use(helmet());
app.use(compress());
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; "
    // "script-src 'self' 'unsafe-eval' https://apis.google.com https://www.googletagmanager.com https://snap.licdn.com https://x.clearbitjs.com https://js.hs-analytics.net https://js.hs-banner.com https://js.hsadspixel.net'unsafe-inline'; object-src 'self'"
  );
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.use("/api", routes);

app.get("/ping", function (req, res) {
  console.log("pong");
  console.log(process.env.DBNAME);
  return res.send("pong");
});

app.get("/status", function (req, res) {
  return res.send("OK");
});

app.get("*", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Cache-Control", "no-cache");

  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(HttpErrorHandler);
app.use(ErrorHandler);

app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log("server ready listening on port" + process.env.SERVER_PORT);
});
