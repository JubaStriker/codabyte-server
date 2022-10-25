const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/Course.json')
const details = require('./data/DetailesCourse.json');
const { request } = require('express');

app.use(cors())

app.get('/', (req, res) => {
    res.send('API running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})