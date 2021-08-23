const express = require('express')
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


require('./routes/routes.js')(app)
const PORT = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL

// Database Configuration

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connection successful');
}).catch(err => console.log('Database connection failed'));


// Views
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

// Static
app.use(express.static(path.join(__dirname + '/public')))

// Server 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
