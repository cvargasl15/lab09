const mongoose = require('mongoose');

const dbconection = async() => {
    try {

        await mongoose.connect(process.env.DB_CNN, {
            userNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('coneccion exitosa a la base de datos');

    } catch (error) {

        console.log(error);
        throw new Error('Error en la conección a la base de datos');

    }
}

module.exports = {
    dbconection
}