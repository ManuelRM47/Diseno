const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones
app.set('port', 3000);
app.set("json spaces", 2)

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/products', require('./routes/rutas'));

//inicio del servidor
app.listen(app.get('port'));
console.log("Hello World\n");