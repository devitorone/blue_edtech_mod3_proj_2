const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
    .connect('mongodb+srv://blue-proj-2:pCCl1c5k0PrGRPGZ@Cluster0.qypa8.mongodb.net/Cluster0?retryWrites=true&w=majority&ssl=true', {
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
