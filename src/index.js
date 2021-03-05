const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', 3000);
app.set("json spaces", 2)

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/plantas', require('./routes/rutas'));
//app.use(require('./api/plantas'));
//app.use(require('./api/plantas/{id}'));
//app.use(require('./api/plantas/humedad/{id}'));
//app.use(require('./api/plantas/minerales/{id}'));
//app.use(require('./api/plantas/agua/{id}'));
//app.use(require('./api/plantas/historial/{id}'));
//app.use(require('./api/plantas/historial/rangos/{id}}/{fecha_inicial}/{fecha_final}'));

//inicio del servidor
app.listen(app.get('port'));
console.log("Hello World\n");