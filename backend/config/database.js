const mongoose = require('mongoose');


const connectionDatabase = () => {
    mongoose.connect(process.env.DB_CONNECTION_URI)
        .then((data) => {
            console.log('Database connection is ready...');
        })
}
module.exports = connectionDatabase