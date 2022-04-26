const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
    .connect('mongodb+srv://blue-proj-2:123456@cluster0.qypa8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
