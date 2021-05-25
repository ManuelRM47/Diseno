const productController = {}
const product = require('../models/products.js');
//const products = require('../routes/data.json');

productController.getProducts = async (req,res) =>{
    const products = await product.find()
    res.json(products);
}

productController.createProduct = async (req,res) => {
    const newProduct = new product(req.body);
    await newProduct.save();
    //console.log(req.body);
    res.send({message:'Product added'})
}

productController.getProduct = async (req,res) =>{
    console.log(req.params);
    const productFound = await product.findById(req.params.id);
    res.send(productFound)
}

module.exports = productController;