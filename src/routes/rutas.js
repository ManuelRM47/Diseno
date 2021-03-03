const { Router } = require("express");
const router = Router();

//const express = require("express");
//const router = express.Router();

router.get('/', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/humedad/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/minerales/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/agua/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/agua/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/historial/{id}', (req, res) => {
    res.json({ "name": "John Doe" });
});

router.get('/api/plantas/historial/rangos/{id}/{fecha_inicial}/{fecha_final}', (req, res) => {
    res.json({ "name": "John Doe" });
});

module.exports = router;