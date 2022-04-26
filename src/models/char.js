const mongooose = require('mongoose');

const CharSchema = new mongooose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
});

const Char = mongooose.model('paletas', CharSchema);

module.exports = Char;
