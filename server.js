// filepath: [server.js](http://_vscodecontentref_/12)
/* ******************************************
 * This [server.js](http://_vscodecontentref_/13) file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const path = require("path");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");

/* ***********************
 * Middleware
 *************************/
app.use(express.static("public")); // Serve static files
app.use(expresslayouts);

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure views directory is set
console.log("Views directory:", path.join(__dirname, "views")); // Debug log
app.set("layout", "./layouts/layout"); // Layout file

/* ***********************
 * Routes
 *************************/
app.use(static);

// Index route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Error Handling
 *************************/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const host = process.env.HOST || "localhost"; // Default to localhost if HOST is not set

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
