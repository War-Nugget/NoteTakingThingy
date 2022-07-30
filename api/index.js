const express = require("express");
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
// Import our modular routers for /tips and /feedback
const app = express();
// GET Route for homepage
app.get("/", (req, res) => res.send("api"));

app.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) =>
    res.json(JSON.parse(data))
  );
});

app.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { isValid, errors } = req.body;
  
    const payload = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
      errors,
    };
  
    if (!isValid) {
      readAndAppend(payload, './db/db.json');
      res.json(`Notes information added 🔧`);
    } else {
      res.json({
        message: 'Object is valid, not logging. Check front end implementation',
        error_id: payload.error_id,
      });
    }
  });

module.exports = app;