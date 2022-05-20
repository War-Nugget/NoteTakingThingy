const router = require('express').Router();
const {v4: uidv4} = require('uuid');
const {   
    readFromFile,
    readAndAppend,
    writeToFile,
    readAndDelete
} = require('../helpers/fsUtils');

router.get('/notes', (req, res) =>{
    res.json('get!')
})
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();

    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    const filteredData = readAndDelete(req.params.id, './db/db.json'); 
    res.json(filteredData)
})  
module.exports = router