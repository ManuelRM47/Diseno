const { Router } = require("express");
const router = Router();

const data = require('./data.json');

console.log(data);

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta);
            console.log(planta.name);
        }
    });
});

router.post('/', (req, res) => {
    const { name, humedad, minerales, agua, historial } = req.body;
    if (name && humedad && minerales && agua && historial) {
        const id = data.length + 1;
        const nuevaplanta = { id, ...req.body };
        data.push(nuevaplanta);
        //console.log(nuevaplanta);
        res.status(200).json(data);
    } else {
        res.status(500).json({ error: 'no data' });
        res.send("Err: No data");
    }
});

//rutas

router.get('/humedad/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.humedad);
        }
    });
});

router.get('/minerales/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.minerales);
        }
    });
});

router.get('/agua/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.agua);
        }
    });
});

router.get('/historial/:id', (req, res) => {
    const { id } = req.params;
    data.forEach(planta => {
        if (planta.id == id) {
            res.json(planta.historial);
        }
    });
});

router.get('/historial/rangos/:id/:start_date/:end_date', (req, res) => {
    const { id, start_date, end_date } = req.params;
    const dt1 = new Date(decodeURIComponent(start_date));
    const dt2 = new Date(decodeURIComponent(end_date));
    var reg = [];
    data.forEach(planta => {
        if (planta.id == id) {
            for (var registro in planta.historial) {
                var rdt = new Date(planta.historial[registro]);
                if ((dt1.getTime() < rdt.getTime()) && (dt2.getTime() > rdt.getTime())) {
                    reg.push(planta.historial[registro]);
                }
            }
            res.json(reg);
        }
    });
});

module.exports = router;

/*,
{
    "id": "6",
    "name": "Ceylon",
    "humedad": "",
    "minerales": "",
    "agua": "",
    "historial": ""
}*/