const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pipipopo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('Connected'))
.catch(console.log((err) => console.error(err)));



