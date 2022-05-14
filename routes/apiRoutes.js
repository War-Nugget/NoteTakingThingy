const router = require('express').Router();
const store = require('../db/store');

router.post('/notes', (req, res) =>{
    res.json('post!')
})
router.get('/notes', (req, res) => {
    store.addNote();
    res.json('post!')
});

module.exports = router