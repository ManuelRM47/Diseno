const { Router } = require("express");
const productController = require("../controller/productController");
const router = Router();

const data = require('./data.json');



//console.log(data);

router.get('/', productController.getProducts);


router.post('/', productController.createProduct);


router.get('/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(product => {
        if (product.id == id) {
            res.json(product);
            console.log(product.name);
        }
    });
});

//rutas

router.get('/name/:id', (req, res) => {
    const {id} = req.params;
    data.forEach(product => {
        if (product.id == id) {
            res.json(product.name);
        }
    });
});

router.get('/category/:id', (req, res) => {
    const {id} = req.params;
    data.forEach(product => {
        if (product.id == id) {
            res.json(product.category);
        }
    });
});

router.get('/img/:id', (req, res) => {
    const {id} = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.img);
        }
    });
});

router.get('/price/:id', (req, res) => {
    const {id} = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.price);
        }
    });
});

module.exports = router;
