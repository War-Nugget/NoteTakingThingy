const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
    readAndDelete,
} = require('../helpers/fsUtils');


// GET call
router.get('/notes', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    // can't have 2 res.json following each other
});

// POST for notes.html
router.post('/notes', (req,res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    readAndAppend(newNote,'./db/db.json');
    res.json(newNote);
});

// Delete call
router.delete('/notes/:id', (req,res) => {
    const filteredData = readAndDelete(req.params.id, './db/db.json');
    res.json(filteredData);
})


module.exports = router;
