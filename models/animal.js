const {Schema, model} = require("mongoose")

const animalSchema = new Schema({
    name: {type: String},
    species: {type: String},
    image:{type: String},
    reservedForAdoption: {type: Boolean}
}, {
    timestamps: true
})

const Animal = model('Animal', animalSchema)

module.exports = Animal