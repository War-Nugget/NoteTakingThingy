const router = require('express').Router();

router.post('/notes', (req, res) =>{
    res.json('post!')
})
router.get('/notes', (req, res) => {
    res.json('post!')
});

module.exports = router