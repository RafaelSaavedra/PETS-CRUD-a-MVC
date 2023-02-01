
const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const PetSchema = Schema({
   // _id: String,
    id: Number,
    name: String,
    type: String,
    age: Number
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;

/*
const Pet = mongoose.model('Pet', {
    name: String,
    type: String,
    age: Number
})
*/
