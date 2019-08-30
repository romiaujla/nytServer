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


app.get('/books', (req, res) => {
    
    // getting search parameter and setting a defaul value
    const {search = '', sort} = req.query;

    // validating sort
    if(sort){
        if(!['title', 'rank'].includes(sort)){
            return res  
                .status(400)
                .send(`Sort must be one of title or rank`);
        }
    }

    // filtering the books based on the search results
    let results = books
        .filter((book) => {
            return book
                .title
                .toLowerCase()
                .includes(search.toLowerCase());
        });

    // sorts the books based on the input for what sort method is passed
    if(sort){
        results
            .sort((a,b)=> {
                return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
            })
    }
    
    res
      .json(results);
})