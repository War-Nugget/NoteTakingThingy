const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");
const express = require("express");

const app = express();
// Port for Heroku
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// API route
app.use("/api", apiRoutes);

// HTML route
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
console.log("Visit page here: http://localhost:3001/");

// Make data routes and HTML routes