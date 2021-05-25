const {Schema, model} = require('mongoose');
ProductSchema = new Schema({
    id:{type:Number, required:true},
    name: {type:String, required:true},
    category: {type:Number, required:true},
    img: {type:String, required:true},
    price: {type:Number, required:true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product',ProductSchema)