const exp = require('constants');
const express = require('express');
const apiRoutes = reqire('./routes/apiRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.status('public'));

app.post('/api/notes', (req, res) => {
    res.json('post!');
});

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);