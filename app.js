const express = require('express');
const morgan = require('morgan');
const books = require('./book');

const app = express();
app.use(morgan('common'));
const port = 8000;

// Listening at port = 8000
app.listen(port, () => {
    console.log(`Express server is runnig at port: ${port}`)
})

// default path
app.get('/', (_, res) => {
    res
      .send(`App is running at port: ${port}`)
})

app.get('/book', (req, res) => {
    
    // return the books to see if import is working
    res
      .json(books);
})