const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
    .connect('mongodb://blue-proj-2:<password>@cluster0-shard-00-00.qypa8.mongodb.net:27017,cluster0-shard-00-01.qypa8.mongodb.net:27017,cluster0-shard-00-02.qypa8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11sdzx-shard-0&authSource=admin&retryWrites=true&w=majority&ssl=true', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}



module.exports = connectToDatabase;
// pCCl1c5k0PrGRPGZ
