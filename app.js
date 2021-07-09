const express = require('express');
// chalk will color coat code
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')

const app = express();

// this should be above my get request
//this is middlewere
app.use(morgan('tiny')); 

// below is going into the public folder and looking for an in devicePixelRatio.html to display
//this is middlewere thats built in 
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('Hello from my app')
})

app.listen(3000, () => {
    debug(`listening on port 3000 ${chalk.green('3000')}`)
})