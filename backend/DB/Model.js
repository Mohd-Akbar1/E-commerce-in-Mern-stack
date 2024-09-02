const mongoose=require('mongoose');

const clothes= mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: [String], required: true }, // This should be an array of strings
    price: { type: Number, required: true },
    color: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true }
})

const Cloth=new mongoose.model('Cloth',clothes)

module.exports=Cloth