const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
const port = 8000;

app.listen(port, () => {
    console.log(`Express server is runnig at ${port}`)
})