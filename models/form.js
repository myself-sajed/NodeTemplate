const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('form', formSchema)